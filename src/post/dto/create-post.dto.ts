import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePostDto {
    @Field()
    title: string;

    @Field({ nullable: true })
    content?: string;
}
