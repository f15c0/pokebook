import { useState } from "react";
import { Select, Pagination, useMantineTheme } from "@mantine/core";
const PokemonPagination = ({ pokemon }) => {
  const theme = useMantineTheme();
  const [activePage, setPage] = useState("8");

  const limit = 5;
  const perPage = Math.ceil(pokemon?.length / limit);

  const startIndex = (activePage - 1) * limit;
  const endIndex = startIndex + limit;
  const activePageData = pokemon?.slice(startIndex, endIndex);
  return (
    <div className="flex items-center justify-between">
      <Pagination total={activePage} color={theme.primaryColor} radius="sm" />
      <Select
        value={activePage}
        onChange={setPage}
        size="sm"
        className="w-20 "
        data={["8", "12", "16", "24"]}
      />
    </div>
  );
};

export default PokemonPagination;
