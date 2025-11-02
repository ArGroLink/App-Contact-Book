import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";

interface Props {
  filterType: string;
  setFilterType: (val: string) => void;
}

const FilterPanel: React.FC<Props> = ({ filterType, setFilterType }) => {
  return (
    <ButtonGroup className="mb-3 w-100">
      <Button
        variant={filterType === "all" ? "primary" : "outline-primary"}
        onClick={() => setFilterType("all")}
      >
        Все
      </Button>
      <Button
        variant={filterType === "phone" ? "primary" : "outline-primary"}
        onClick={() => setFilterType("phone")}
      >
        Телефон
      </Button>
      <Button
        variant={filterType === "email" ? "primary" : "outline-primary"}
        onClick={() => setFilterType("email")}
      >
        Электронная почта
      </Button>
      <Button
        variant={filterType === "address" ? "primary" : "outline-primary"}
        onClick={() => setFilterType("address")}
      >
        Адрес
      </Button>
    </ButtonGroup>
  );
};

export default FilterPanel;
