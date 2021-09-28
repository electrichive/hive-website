module.exports = {
    prompt: async ({ inquirer }) => {
        const questions = [
            {
                type: 'input',
                name: 'component_name',
                message: 'What is the component name?',
            },
            {
                type: 'input',
                name: 'comment',
                message: 'Basic comment describing purpose of component'
            }
        ];

        const answers = await inquirer.prompt(questions);
        const absPath = `src/components/${answers.component_name}`;
        return { ...answers, absPath };
    },
};
