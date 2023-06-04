import { useState } from "react";
import Button from "../../Utils/Button";

// Define a component for filtering the activities
function FilterSection({ onFilterChange }) {
  const [filter, setFilter] = useState({
    activity: "",
    date: "",
    location: "",
  });

  //Function to handle the filter changes
  const handleFilterChange = (e) => {
    if (e.key === "Enter") {
      handleApplyFilter(filter);
    }
    const { name, value } = e.target;
    setFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
  };

  //Function to apply the filter
  const handleApplyFilter = () => {
    onFilterChange(filter);
  };

  return (
    <div>
      <h2 className="text-lg text-bold">Filter Activities</h2>
      <label>
        Tags:
        <input
          onKeyDown={(e) => handleFilterChange(e)}
          type="text"
          name="activity"
          placeholder="Ex: Biking, running..."
          defaultValue={filter.category}
          className="rounded-2xl mx-1 py-1"
          onChange={(e) => handleFilterChange(e)}
        />
      </label>
      <label>
        Event Date:
        <input
          type="date"
          name="date"
          defaultValue={filter.date}
          className="rounded-2xl mx-1 py-1"
          onChange={(e) => handleFilterChange(e)}
        />
      </label>
      <label>
        Location:
        <input
          type="text"
          name="location"
          onKeyDown={(e) => handleFilterChange(e)}
          defaultValue={filter.location}
          className="rounded-2xl mx-1 py-1"
          onChange={(e) => handleFilterChange(e)}
        />
      </label>
      <Button
        onClick={handleApplyFilter}
        text="Apply Filter"
        buttonStyles={
          "text-white bg-green-600 hover:bg-green-800 focus:outline-none font-medium rounded-lg text-sm mb-4 ml-2 px-4 py-2"
        }
      />
    </div>
  );
}

export default FilterSection;
