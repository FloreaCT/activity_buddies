import { useState } from "react";
import Button from "../../Utils/Button";

function FilterSection({ onFilterChange }) {
  const [filter, setFilter] = useState({
    activity: "",
    date: "",
    location: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
  };

  const handleApplyFilter = () => {
    onFilterChange(filter);
  };

  return (
    <div>
      <h2 className="text-lg text-bold">Filter Activities</h2>
      <label>
        Activity:
        <input
          type="text"
          name="activity"
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
