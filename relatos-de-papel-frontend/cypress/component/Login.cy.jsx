/// <reference types="cypress" />

describe("Pruebas de Inicio de Sesión", () => {
  beforeEach(() => {
    cy.visit("/login"); // Asegúrate de que "/login" sea la ruta correcta
  });

  it("Debe mostrar un error si las credenciales son incorrectas", () => {
    cy.get('input[type="text"]').type("incorrecto");
    cy.get('input[type="password"]').type("incorrecto");
    cy.get("button.login-btn").click();

    cy.get(".error-message")
      .should("be.visible")
      .and("contain", "Credenciales incorrectas");
  });

  it("Debe permitir el inicio de sesión como usuario normal", () => {
    cy.get('input[type="text"]').type("user");
    cy.get('input[type="password"]').type("user");
    cy.get("button.login-btn").click();

    cy.url().should("include", "/main");
  });

  it("Debe permitir el inicio de sesión como administrador", () => {
    cy.get('input[type="text"]').type("admin");
    cy.get('input[type="password"]').type("admin");
    cy.get("button.login-btn").click();

    cy.url().should("include", "/admin");
  });

  it("Debe permitir hacer clic en el enlace de registro", () => {
    cy.get(".redirect-text a").click();
    cy.url().should("include", "/register");
  });
});
