'use client';

import { SearchField } from "@heroui/react";

export function Search({ onSearch }) {
  return (
    <SearchField name="search" aria-label="Search doctors">
      <SearchField.Group className="bg-gray-200 border border-black">
        <SearchField.SearchIcon />

        <SearchField.Input
          className="w-60"
          placeholder="Search by Doctor Name"
          onChange={(e) => onSearch(e.currentTarget.value)}
        />

        <SearchField.ClearButton />
      </SearchField.Group>
    </SearchField>
  );
}