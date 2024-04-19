//Random Recipe Generator

const randomFoods = {
    'protein': ['Sirlion Beef', 'Mcnuggets', 'Salmon'],
    'side': ['Ceasar Salad', 'Baked Potatos', 'Rice'],
    'extra': ['Crispy Onions', 'Oreo Mcflurry', 'One Slide of Tomato'],
    
    randomFood(typeOfFood) {
        let food;
        let randomNumber;
        switch (typeOfFood) {
            case 'protein':
                randomNumber = Math.floor(Math.random() * this.protein.length);
                food = this.protein[randomNumber].toLocaleLowerCase();
                break;
            case 'side':
                randomNumber = Math.floor(Math.random() * this.side.length);
                food = this.side[randomNumber].toLocaleLowerCase();
                break;
            case 'extra':
                randomNumber = Math.floor(Math.random() * this.extra.length);
                food = this.extra[randomNumber].toLocaleLowerCase();
                break;
            default:
                console.log('How you even got here?')
                break;
        }

        return food;
    },

    randomMessage() {
        const message = `Today you are going to eat ${this.randomFood('protein')} with a side of ${this.randomFood('side')} and a extra of ${this.randomFood('extra')}`;

        console.log(message);
    }
};

randomFoods.randomMessage()