import { Review } from "./review.model"

export interface IProduct {
    name?: string;
    description?: string;
    src?: string;
    reviews?: Review;
}

