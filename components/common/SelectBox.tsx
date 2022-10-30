import { ChangeEvent } from "react";

interface Props {
  itemList: string[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  selectedItem: string;
}

function SelectBox({ itemList, onChange, selectedItem }: Props) {
  return (
    <select onChange={onChange} value={selectedItem}>
      {itemList.map((item) => {
        return (
          <option key={item} value={item}>
            {item}
          </option>
        );
      })}
    </select>
  );
}

export default SelectBox;
