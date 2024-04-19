//Random Recipe Generator

const randomFoods = {
    'protein': ['Sirloin Beef', 'Mcnuggets', 'Salmon', 'Tofu Scramble', 'Cricket Flour Pasta', 'Lentil Soup', 'Black Bean Burger', 'Seitan Steak', 'Tempeh Bacon', 'Quinoa Bowl'],
    'side': ['Ceasar Salad', 'Baked Potatos', 'Rice', 'Roasted Vegetables', 'Sauteed Greens', 'Fruit Salad', 'Mac and Cheese', 'Sweet Potato Fries', 'Coleslaw', 'Quinoa'],
    'extra': ['Crispy Onions', 'Oreo Mcflurry', 'One Slide of Tomato', 'Pickles', 'Guacamole', 'Kimchi', 'Sriracha Mayo', 'A Side of Ranch', 'Animal Style Fries', 'Cheese Curds', 'Deep Fried Oreos', 'Beetroot Hummus', 'Edamame'],
    
    randomMeal() {
        let meal = []
        const randomProtein = this.protein[Math.floor(Math.random() * this.protein.length)].toLocaleLowerCase();
        const randomSide = this.side[Math.floor(Math.random() * this.side.length)].toLocaleLowerCase();
        const randomExtra = this.extra[Math.floor(Math.random() * this.extra.length)].toLocaleLowerCase();

        meal.push(randomProtein, randomSide, randomExtra);

        return meal;
    },

    randomMessage() {
        const meal = this.randomMeal()
        const message = `Today you are going to eat ${meal[0]} with a side of ${meal[1]} and a extra of ${meal[2]}`;

        return message
    }
};

console.log(randomFoods.randomMessage())