import { query } from '@angular/animations';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private apollo: Apollo) { }

  getAllListings() {
    let query = this.apollo.query({
      query: gql`{
        getAllListings{
          id
          listing_id
          listing_title
          description
          street
          city
          postal_code
          price
          email
          username
        }
      }`
    })
    return query;
  }

  login(formValues: any) {
    let mutation = this.apollo.mutate({
      mutation: gql`
        mutation login(
          $username: String!,
          $password: String!
        ) {
          login(
            username: $username,
            password: $password
          ) 
        }
      `,
      variables: formValues
    })
    return mutation;
  }

  getCurrentUser() {
    let query = this.apollo.query({
      query: gql`{
        getCurrentUser{
          type
        }
      }
      `
    })
    return query;
  }

  getBookingsByCurrentUser() {
    let query = this.apollo.query({
      query: gql`{
        getBookingsByCurrentUser{
          listing_id,
          booking_id,
          booking_date,
          booking_start,
          booking_end,
          username
        }
      }`
    })
    return query;
  }

  getListingsBySearch(formValues: any) {
    let query = this.apollo.query({
      query: gql`
        query getListingsBySearch($search_string: String!){
          getListingsBySearch(search_string: $search_string){
            id
            listing_id
            listing_title
            description
            street
            city
            postal_code
            price
            email
            username
          }
        }
      `,
      variables: { search_string: formValues }
    })
    return query;
  }

  createBooking(formValues: any) {
    let mutation = this.apollo.mutate({
      mutation: gql`
      mutation createBooking(
        $listing_id: String!,
        $booking_id: String!,
        $booking_start: String!,
        $booking_end: String!
        ) {
            createBooking(
              listing_id: $listing_id,
              booking_id: $booking_id,
              booking_start: $booking_start,
              booking_end: $booking_end
          ) 
          {
            listing_id
            booking_id
            booking_date
            booking_start
            booking_end
            username
          }
        }`,
      variables: formValues
    })
    return mutation;
  }

  createUser(formValues: any){
    let mutation = this.apollo.mutate({
      mutation: gql`
      mutation createUser(
        $username: String!,
        $firstname: String!,
        $lastname: String!,
        $password: String!,
        $email: String!,
        $type: String!
      ){
        createUser(
          username: $username,
          firstname: $firstname,
          lastname: $lastname,
          password: $password,
          email: $email,
          type: $type,
        ){
          username
          firstname
          lastname
          password
          email
          type
        }
      }`,
      variables: formValues
    })
    return mutation;
  }

  createListing(formValues: any){
    let mutation = this.apollo.mutate({
      mutation: gql`
      mutation createListing(
        $listing_id: String!,
        $listing_title: String!,
        $description: String!,
        $street: String!,
        $city: String!,
        $postal_code: String!,
        $price: Float!,
        $email: String!,
        $username: String!
      ){
        createListing(
          listing_id: $listing_id,
          listing_title: $listing_title,
          description: $description,
          street: $street,
          city: $city,
          postal_code: $postal_code,
          price: $price,
          email: $email,
          username: $username
        ){
          listing_id
          listing_title
          description
          street
          city
          postal_code
          price
          email
          username
        }
      }`,
      variables: formValues
    })
    return mutation;
  }

}
