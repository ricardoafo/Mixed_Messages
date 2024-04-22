//Random Recipe Generator

const randomFoods = {
    'protein': ['Sirloin Beef', 'Mcnuggets', 'Salmon', 'Tofu Scramble', 'Cricket Flour Pasta', 'Lentil Soup', 'Black Bean Burger', 'Seitan Steak', 'Tempeh Bacon', 'Quinoa Bowl'],
    'side': ['Ceasar Salad', 'Baked Potatos', 'Rice', 'Roasted Vegetables', 'Sauteed Greens', 'Fruit Salad', 'Mac and Cheese', 'Sweet Potato Fries', 'Coleslaw', 'Quinoa'],
    'extra': ['Crispy Onions', 'Oreo Mcflurry', 'One Slide of Tomato', 'Pickles', 'Guacamole', 'Kimchi', 'Sriracha Mayo', 'A Side of Ranch', 'Animal Style Fries', 'Cheese Curds', 'Deep Fried Oreos', 'Beetroot Hummus', 'Edamame'],

    start() {
        let on = true;
        const prompt = require('prompt-sync')({sigint: true});
        const name = prompt('Hi, What\'s your name? ');

        do {
            console.log(this.randomMessage(name));
            on = prompt('Would you like to see another random recipe? (yes/no)').toLocaleLowerCase();

            const validOptions = ["yes", "y", "no", "n"];
            count = 0;
            while (!validOptions.includes(on)) {
                on = prompt('Please enter a valid option (yes/no)');
                count++;

                if (count === 3) {
                    console.log('You enter a wrong option to many times, program is now closing!');
                    return;
                }
            }

            if (on.startsWith('n')) {
                on = false;
            }
        } while (on);
    },
    
    randomMeal() {
        let meal = []
        const randomProtein = this.protein[Math.floor(Math.random() * this.protein.length)].toLocaleLowerCase();
        const randomSide = this.side[Math.floor(Math.random() * this.side.length)].toLocaleLowerCase();
        const randomExtra = this.extra[Math.floor(Math.random() * this.extra.length)].toLocaleLowerCase();

        meal.push(randomProtein, randomSide, randomExtra);

        return meal;
    },

    randomMessage(name) {
        const meal = this.randomMeal();
        const message = `${name} today you are going to eat ${meal[0]} with a side of ${meal[1]} and a extra of ${meal[2]}`;

        return message;
    }
};

randomFoods.start();
