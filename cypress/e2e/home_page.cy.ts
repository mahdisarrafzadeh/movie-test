import { string, testIds } from "../utils";

describe("MoviesLink Component", () => {
  beforeEach(() => {
    cy.visit(string.path.home);
  });

  it("should render the MoviesLink component", () => {
    cy.findByTestId(testIds.home.moviesLink).should("exist");
  });

  it("should have correct href attribute", () => {
    cy.findByTestId(testIds.home.moviesLink)
      .should("have.attr", "href")
      .and("include", string.path.movies);
  });

  it("should navigate to movies page with correct query parameters", () => {
    cy.findByTestId(testIds.home.moviesLink).click();
    cy.url().should("include", string.path.movies);
  });
});
