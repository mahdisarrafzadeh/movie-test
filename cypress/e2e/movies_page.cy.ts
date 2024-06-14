import { string, testIds } from "../utils";

describe("Movies Page", () => {
  beforeEach(() => {
    // Navigate to the movies page before each test
    cy.visit(string.path.movies);
  });

  it("should display the movie list", () => {
    cy.findByTestId(testIds.movies.movieList).should("be.visible");
    cy.findByTestId(testIds.movies.movieList)
      .children()
      .should("have.length.greaterThan", 0);
  });

  it("should filter movies by genre", () => {
    cy.findByTestId(
      testIds.movies.filterButton(testIds.movies.genreSelect)
    ).click();
    cy.findByTestId(
      testIds.movies.filterDropdown(testIds.movies.genreSelect)
    ).should("be.visible");
    cy.findByTestId(`${testIds.movies.genreSelect}-item-drama`).click();

    cy.url().should("include", "category=drama");

    cy.findByTestId(`${testIds.movies.movieItem}-0`)
      .trigger("mouseover")
      .contains("درام");
  });

  it("should sort movies by highest rating", () => {
    cy.findByTestId(
      testIds.movies.filterButton(testIds.movies.sortSelect)
    ).click();
    cy.findByTestId(
      testIds.movies.filterDropdown(testIds.movies.sortSelect)
    ).should("be.visible");
    cy.findByTestId(`${testIds.movies.sortSelect}-item-highest`).click();
    cy.url().should("include", "sort=highest");
  });

  it("should combine filters and sort movies", () => {
    cy.findByTestId(
      testIds.movies.filterButton(testIds.movies.genreSelect)
    ).click();
    cy.findByTestId(
      testIds.movies.filterDropdown(testIds.movies.genreSelect)
    ).should("be.visible");
    cy.findByTestId(`${testIds.movies.genreSelect}-item-comedy`).click();
    cy.url().should("include", "category=comedy");
    cy.findByTestId(
      testIds.movies.filterButton(testIds.movies.sortSelect)
    ).click();
    cy.findByTestId(
      testIds.movies.filterDropdown(testIds.movies.sortSelect)
    ).should("be.visible");
    cy.findByTestId(`${testIds.movies.sortSelect}-item-lowest`).click();
    cy.url().should("include", "category=comedy&sort=lowest");
  });
});
