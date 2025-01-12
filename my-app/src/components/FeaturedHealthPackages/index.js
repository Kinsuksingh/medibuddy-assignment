import React, { useState } from "react";

const FeaturedHealthPackages = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState(""); // For selected category

  // Function to filter packages by selected category
  const filterPackages = (category) => {
    const packages = data?.props?.[0]?.packages || []; // Safely access packages
    if (!category) return packages; // If no category is selected, return all packages
    return packages.filter((pkg) =>
      pkg.subCategories.includes(category.toUpperCase())
    );
  };

  const filteredPackages = filterPackages(selectedCategory);

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>{data.heading || "Health Packages"}</h2>

      {/* Render category buttons */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        {(data?.categories?.["10386"] || []).map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            style={{
              padding: "10px 15px",
              borderRadius: "5px",
              border: "1px solid #ddd",
              backgroundColor: selectedCategory === category ? "#007BFF" : "#fff",
              color: selectedCategory === category ? "#fff" : "#333",
              cursor: "pointer",
              transition: "background-color 0.2s",
            }}
          >
            {category}
          </button>
        ))}
        <button
          onClick={() => setSelectedCategory("")}
          style={{
            padding: "10px 15px",
            borderRadius: "5px",
            border: "1px solid #ddd",
            backgroundColor: !selectedCategory ? "#007BFF" : "#fff",
            color: !selectedCategory ? "#fff" : "#333",
            cursor: "pointer",
            transition: "background-color 0.2s",
          }}
        >
          All
        </button>
      </div>

      {/* Render filtered packages */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {filteredPackages.length > 0 ? (
          filteredPackages.map((pkg) => (
            <div
              key={pkg.packageId}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                width: "300px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#fff",
                textAlign: "center",
              }}
            >
              <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>
                {pkg.packageDisplayName}
              </h3>
              <p style={{ color: "#666", fontSize: "14px" }}>
                {pkg.testCount} Tests | Reports: {pkg.reportsTatText}
              </p>
              <p style={{ color: "#28a745", fontWeight: "bold", fontSize: "16px" }}>
                ₹{pkg.price}{" "}
                <span style={{ textDecoration: "line-through", color: "#999" }}>
                  ₹{pkg.priceRange}
                </span>
              </p>
              <p style={{ color: "#ff5722", fontSize: "14px" }}>
                {pkg.tags.bottomTag.join(" | ")}
              </p>
            </div>
          ))
        ) : (
          <p style={{ color: "#999", textAlign: "center" }}>No packages available.</p>
        )}
      </div>
    </div>
  );
};

export default FeaturedHealthPackages;
