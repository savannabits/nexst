import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppMiddleware } from './app.middleware';
import { AppService } from './app.service';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true
    }),
    RecipesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    
  }
}
