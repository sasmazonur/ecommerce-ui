import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

/* A function that returns a Container with a list of CategoryItem components. */
function Categories() {
  return (
    <Container>
    {categories.map((item) => (
      <CategoryItem item={item} key={item.id} />
    ))}
    </Container>

    )
}

export default Categories