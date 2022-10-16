describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  // 1. page loads successfully
  // 2. show all task completed by default
  // 3. user can add a task
  // 4. user can add more than one task
  // 5. user can remove a task
  // 6. user can not add duplicate task
  // 7. user can can submit a task by Enter keypress
  it('page load successfully', () => {
    cy.getByTestId("main-heading")
      .should('be.visible', true)
      .and("contain", "My ToDo");

    cy.getByTestId("task-heading")
      .should('be.visible', true)
      .and('contain', "Have fun and Complete below tasks");


    cy.getByName("task")
      .should('be.visible', true)
      .and('have.value', "");

    cy.getByTestId("task-submit-btn")
      .should('be.visible', true)
      .and('have.text', "Add");
  });

  it("all task should be completed when page loads", () => {
    cy.getByTestId("all-task-completed")
      .should('be.visible', true)
      .and('have.text', "All Done. Take a break")

    cy.getByTestId("task-list")
      .should('not.exist')
  })
})