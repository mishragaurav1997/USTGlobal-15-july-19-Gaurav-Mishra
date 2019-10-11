import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipeData:any ='';
  recipes =[
    {
        brand:'Pizza',
        img:'https://cdn.pixabay.com/photo/2016/04/09/09/22/pizza-1317699__340.jpg',
        description:' Pizza consist of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and various other ingredients (anchovies, olives, meat, etc.) baked at a high temperature, traditionally in a wood-fired oven.'
    },
    {
      brand:'Burger',
      img:'https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246__340.jpg',
      description:'Start with the Right Beef. The best burgers are made from freshly ground, high-grade beef chuck in an 80/20 mix (meat to fat),Making the Patties. Grab 5 to 6 ounces of meat and lightly toss from hand to hand, forming a ball,Pat It Into a Disk,Perfect-Burger Secret Tip,Get Grilling,Time to Flip,Donenes,Toppings.'
  },
  {
    brand:'French Fries',
    img:'https://cdn.pixabay.com/photo/2014/11/10/04/49/french-fries-525005__340.jpg',
    description:'Slice potatoes into French fries, and place into cold water so they won.t turn brown while you prepare the oil,Heat oil in a large skillet over medium-high heat,Dip potato slices into the batter one at a time, and place in the hot oil so they are not touching at first.'
},
{
  brand:'Momos',
  img:'https://cdn.pixabay.com/photo/2018/12/15/23/59/korean-food-3877788__340.jpg',
  description:'Heat the oil on medium-high heat and fry ginger, garlic for few seconds,Then stir fry chopped vegetables with stirring continuously for 3-4 minutes,Now add salt and pepper, stir fry again for 2 minutes,Then mix in spring onion greens and soy sauce and turn off the stove,Let the stuffing cool down. '
},
{
  brand:'Noodles',
  img:'https://cdn.pixabay.com/photo/2018/07/18/19/12/spaghetti-3547078__340.jpg',
  description:' Heat 5 to 6 cups water in a pan, when the water comes to a boil, add salt, next add oil,then add the noodles, boil till the noodles are cooked well,check the doneness of noodles by pressing a few noodles or tasting them.'
},
{
  brand:'Pasta',
  img:'https://cdn.pixabay.com/photo/2014/11/11/18/20/pasta-527286__340.jpg',
  description:'Boil water in a large pot. To make sure pasta does not stick together, use at least 4 quarts of water for every pound of noodles,Salt the water with at least a tablespoon—more is fine. The salty water adds flavor to the pasta,Add pasta,Stir the pasta,Test the pasta by tasting it,Drain the pasta.'
},
{
  brand:'Tomato Soup',
  img:'https://cdn.pixabay.com/photo/2015/02/03/16/31/soup-622737__340.jpg',
  description:'Temper the milk before adding it to the soup by gradually adding small amounts of the hot liquid, warming the milk slowly; then add it to the soup. Add a little heavy cream to the soup to help prevent curdling. In milk-based soups, add acidic ingredients, such as tomatoes and lemon juice, to the milk mixture. Do not add the milk to the acidic ingredients.  Make a thin flour and water paste to mix into the milk before adding acidic ingredients. Thickening the soup with a flour mixture keeps the soup from curdling so easily.Avoid using low-fat and skim milk. The more fat the milk contains the less chance of curdling.Heat milk to 194 degrees F. before adding it to the soup. Do not boil.Heat all cream based soups slowly over low heat. Salt should be added just before the soup is ready to serve.'
 },
{
  brand:'Litti',
  img:'https://cdn.pixabay.com/photo/2015/04/20/12/27/litti-731068__340.jpg',
  description:'Step 1-Make dough. Sieve the flour in big bowl and add salt, carom seeds and oil,Make stuffing. Now grind rosted gram to powder along black pepper (if sattu is not available ),Make Litti. Now take medium-sized dough, Make Chokh, Assemble and Serve.'
},
{
  brand:'Gulab Jamun',
  img:'https://cdn.pixabay.com/photo/2014/06/18/15/48/indian-sweet-371357__340.jpg',
  description:'firstly in a large mixing bowl take milk powder.further, to that add maida and rava.then add pinch of baking soda.also add ghee, lemon juice and crumble well.slowly add milk little by little and knead well.knead to a smooth and soft dough.furthermore, make small balls greasing ghee to hands.'
}

  ];

  constructor() { }
  sendRecipe(recipe){
    this.recipeData =recipe;
  }

  ngOnInit() {
  }

}
