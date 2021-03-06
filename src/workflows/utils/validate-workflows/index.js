/**
 * Validate workflows in parallel
 * @param {Workflow[]} workflows
 * @return {function(Object): Object}
 */
const validateWorkflows = (workflows) => async (values) => {
  const errors = await Promise.all(
    workflows
      .filter((workflow) => workflow.isActive(values))
      .map((workflow) => ({ ...workflow.validate(values) })),
  );

  return errors.reduce((previousErrors, errors) => ({
    ...previousErrors,
    ...errors,
  }));
};

export default validateWorkflows;
