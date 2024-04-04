import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdatePostDto {
    @Field(type => Int)
    id: number;

    @Field({ nullable: true })
    title?: string;

    @Field({ nullable: true })
    content?: string;
}
