import { testIds } from "../utils";

describe("MoviesLink Component", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render the MoviesLink component", () => {
    cy.findByTestId(testIds.home.moviesLink).should("exist");
  });

  it("should have correct href attribute", () => {
    cy.findByTestId(testIds.home.moviesLink)
      .should("have.attr", "href")
      .and("include", "/movies");
  });

  it("should navigate to movies page with correct query parameters", () => {
    cy.findByTestId(testIds.home.moviesLink).click();
    cy.url().should("include", "/movies");
  });
});
