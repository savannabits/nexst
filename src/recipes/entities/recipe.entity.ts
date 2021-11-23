import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Recipe {
  @Field(() => String, { description: 'Name of the recipe' })
  name: string;
  @Field(() => String, {description: 'Recipe Description goes here'})
  description: string;
}
