import Select from "react-select";
import CustomOption from "../CustomOption";
import { currencyOptions } from "../../data/currencies";

export default function CurrencySelection({value,onChange}) {

  return (
    <Select
      options={currencyOptions}
      getOptionLabel={CustomOption}
      getOptionValue={(option) => option.value}
      value={value}
      onChange={onChange}
      isSearchable={true} // 开启搜索功能
      styles={{
        control: (base) => ({
          ...base,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
        }),
      }}
      
    />
  );
}
