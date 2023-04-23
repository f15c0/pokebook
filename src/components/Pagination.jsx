import { Select, Pagination, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

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
  const isSmallScreen = useMediaQuery("(max-width: 767px)");
  const paginationSize = isSmallScreen ? "xs" : "md";
  return (
    <div className="flex items-center justify-center sm:justify-between ">
      <Pagination
        total={isSmallScreen ? 24 : totalPages}
        color={theme.primaryColor}
        radius="sm"
        active={currentPage}
        onChange={handlePageChange}
        size={paginationSize}
      />
      <Select
        value={itemsPerPage.toString()}
        onChange={handleItemsPerPageChange}
        size="sm"
        className="w-20 hidden sm:block custom-font"
        data={["8", "12", "16", "24"]}
      />
    </div>
  );
};

export default PokemonPagination;
