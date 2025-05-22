const FilterQuiz = ({ handleChange }) => {
  return (
    <div className="mb-3">
      <select className="form-select" onChange={handleChange}>
        <option value="All">Toutes les catégories</option>
        <option value="Math">Math</option>
        <option value="Science">Science</option>
        <option value="Histoire">Histoire</option>
      </select>
    </div>
  );
};

export default FilterQuiz;
