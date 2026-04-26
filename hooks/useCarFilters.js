"use client";

import { useCallback, useEffect, useReducer, useRef } from "react";

export const CARS_PER_PAGE = 9;

const defaultFilters = {
  search: "",
  brand: "ALL",
  fuelType: "All",
  type: "All",
  transmission: "All",
  maxPrice: "",
  maxMileage: "",
  sort: "newest",
};

const initialState = {
  filters: defaultFilters,
  page: 1,
  cars: [],
  total: 0,
  totalPages: 1,
  loading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_FILTER":
      return { ...state, filters: { ...state.filters, [action.key]: action.value }, page: 1 };
    case "SET_PAGE":
      return { ...state, page: action.page };
    case "RESET":
      return { ...state, filters: defaultFilters, page: 1 };
    case "LOADING":
      return { ...state, loading: true };
    case "LOADED":
      return { ...state, loading: false, cars: action.cars, total: action.total, totalPages: action.totalPages, page: action.page };
    default:
      return state;
  }
}

export function useCarFilters(savedSlugs = [], savedOnly = false) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const abortRef = useRef(null);

  const savedKey = savedSlugs.join(",");

  useEffect(() => {
    if (abortRef.current) abortRef.current.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    dispatch({ type: "LOADING" });

    const params = new URLSearchParams();
    const { search, brand, fuelType, type, transmission, maxPrice, maxMileage, sort } = state.filters;
    if (search) params.set("search", search);
    if (brand !== "ALL") params.set("brand", brand);
    if (fuelType !== "All") params.set("fuelType", fuelType);
    if (type !== "All") params.set("type", type);
    if (transmission !== "All") params.set("transmission", transmission);
    if (maxPrice) params.set("maxPrice", maxPrice);
    if (maxMileage) params.set("maxMileage", maxMileage);
    params.set("sort", sort);
    params.set("page", state.page);
    params.set("limit", CARS_PER_PAGE);
    if (savedOnly && savedKey) params.set("saved", savedKey);

    fetch(`/api/cars?${params.toString()}`, { signal: controller.signal })
      .then((r) => r.json())
      .then(({ cars, total, totalPages, page }) => {
        dispatch({ type: "LOADED", cars, total, totalPages, page });
      })
      .catch(() => {});
  }, [state.filters, state.page, savedKey, savedOnly]);

  const setFilter = useCallback((key, value) => dispatch({ type: "SET_FILTER", key, value }), []);
  const resetFilters = useCallback(() => dispatch({ type: "RESET" }), []);
  const setPage = useCallback((page) => dispatch({ type: "SET_PAGE", page }), []);

  const hasActiveFilters = Object.entries(state.filters).some(
    ([k, v]) => v !== defaultFilters[k]
  );

  return {
    filters: state.filters,
    setFilter,
    resetFilters,
    hasActiveFilters,
    cars: state.cars,
    total: state.total,
    loading: state.loading,
    page: state.page,
    setPage,
    totalPages: state.totalPages,
    CARS_PER_PAGE,
  };
}
