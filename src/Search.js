import Dropdown from "./Dropdown";
import React, { useState, useEffect } from "react";

export default function Search({ houses, setData }) {
  const [searchValue, setSearchValue] = useState("");
  const [locationFilter, setLocationFilter] = useState("Show All");
  const [propertyTypeFilter, setPropertyTypeFilter] = useState("Show All");
  const [priceFilter, setPriceFilter] = useState("Show All");

  const handleFilter = () => {
    const filterData = houses.filter(function (house) {
      return (
        house.country === locationFilter && house.type === propertyTypeFilter
      );
    });

    const filterLocation = houses.filter(function (house) {
      return house.country === locationFilter;
    });
    const filterProperty = houses.filter(function (house) {
      return house.type === propertyTypeFilter;
    });

    const filterPrice = houses.filter(function (house) {
      return house.price >= priceFilter.slice(0, 6);
    });

    if (locationFilter === "Show All" && propertyTypeFilter === "Show All") {
      setData(houses);
    } else if (propertyTypeFilter === "Show All" && locationFilter) {
      setData(filterLocation);
    } else if (locationFilter === "Show All" && propertyTypeFilter) {
      setData(filterProperty);
    } else {
      setData(filterData);
    }
  };

  const handleLocationFilter = (value) => {
    setLocationFilter(value);
  };

  const handlePropertyTypeFilter = (value) => {
    setPropertyTypeFilter(value);
  };

  const handlePriceFilter = (value) => {
    setPriceFilter(value);
  };

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    const filterBySearch = houses.filter(function (house) {
      return house.name.toLowerCase().includes(searchValue);
    });
    setData(filterBySearch);
  }, [searchValue, houses, setData]);

  const LocationOptions = [
    { value: "Show All", label: "Show All" },
    { value: "United States", label: "United States" },
    { value: "Canada", label: "Canada" }
  ];

  const PropertyTypeOptions = [
    { value: "Show All", label: "Show All" },
    { value: "House", label: "House" },
    { value: "Apartment", label: "Apartment" }
  ];

  const PriceOptions = [
    { value: "Show All", label: "Show All" },
    { value: "1,000", label: "$ 1,000 - $ 2000" },
    { value: "2,000", label: "$ 2,000 - $ 3000" },
    { value: "3,000", label: "$ 3,000 - $ 4000" }
  ];

  return (
    <>
      <div className="search_wrapper">
        <h1 className="title">Search Properties to Rent</h1>
        <input
          type="search"
          className="search_box"
          name="search"
          value={searchValue}
          onChange={handleChange}
          placeholder="Search with Search Bar"
        />
      </div>
      <div className="search_container">
        <Dropdown
          options={LocationOptions}
          onChange={handleLocationFilter}
          value={locationFilter}
          label="Location"
        />
        <Dropdown
          options={PropertyTypeOptions}
          onChange={handlePropertyTypeFilter}
          value={propertyTypeFilter}
          label="Property Type"
        />
        <Dropdown
          options={PriceOptions}
          onChange={handlePriceFilter}
          value={priceFilter}
          label="Price"
        />
        <Dropdown
          options={PriceOptions}
          onChange={handlePriceFilter}
          value={priceFilter}
          label="Price"
        />
        <button onClick={handleFilter} className="search">
          Search
        </button>
      </div>
    </>
  );
}
