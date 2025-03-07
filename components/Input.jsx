const Input = ({ name, label, type, placeholder, error, value, onChange }) => {
  return (
    <div className="relative">
      <label className="absolute bg-white text-xs -top-[6px] left-4 px-1 z-10 ">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`border py-3 w-full px-4  rounded-md autofill:bg-white ${
          error ? "border-red-500" : "border-[#80808066]"
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
}

export default Input
