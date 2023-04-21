import { Select, Pagination, useMantineTheme } from "@mantine/core";

const PokemonPagination = ({
  pokemon,
  onPageChange,
  onItemsPerPageChange,
  currentPage,
  itemsPerPage,
}) => {
  const theme = useMantineTheme();

  const totalPages = Math.ceil(pokemon?.length);

  const handlePageChange = (newPage) => {
    onPageChange(newPage);
  };

  const handleItemsPerPageChange = (value) => {
    onItemsPerPageChange(parseInt(value));
  };

  return (
    <div className="flex items-center justify-between">
      <Pagination
        total={totalPages}
        color={theme.primaryColor}
        radius="sm"
        active={currentPage}
        onChange={handlePageChange}
      />
      <Select
        value={itemsPerPage.toString()}
        onChange={handleItemsPerPageChange}
        size="sm"
        className="w-20"
        data={["8", "12", "16", "24"]}
      />
    </div>
  );
};

export default PokemonPagination;
