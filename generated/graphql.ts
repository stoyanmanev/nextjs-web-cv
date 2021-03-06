import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from 'react-query';
import { fetchData } from '../fetcher/fetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Mongo object id scalar type */
  ObjectId: any;
};

export type Abilities = {
  __typename?: 'Abilities';
  _id: Scalars['ObjectId'];
  knowledges: Array<Scalars['String']>;
  skills: Array<Scalars['String']>;
};

export type Auth = {
  __typename?: 'Auth';
  _id: Scalars['ObjectId'];
  token: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  fullname: Scalars['String'];
  password: Scalars['String'];
};

export type EditUserInput = {
  address?: InputMaybe<Scalars['String']>;
  age?: InputMaybe<Scalars['String']>;
  blog?: InputMaybe<Array<NewsInput>>;
  cv?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  facebook?: InputMaybe<Scalars['String']>;
  facts?: InputMaybe<Array<FactInput>>;
  form?: InputMaybe<Scalars['Boolean']>;
  fullname?: InputMaybe<Scalars['String']>;
  github?: InputMaybe<Scalars['String']>;
  googleIframe?: InputMaybe<Scalars['String']>;
  img?: InputMaybe<Scalars['String']>;
  linkedin?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  personalPath?: InputMaybe<Array<PersonalPathInput>>;
  phone?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['String']>;
  residence?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
};

export type Fact = {
  __typename?: 'Fact';
  _id: Scalars['String'];
  name: Scalars['String'];
  value?: Maybe<Scalars['Float']>;
};

export type FactInput = {
  _id: Scalars['String'];
  name: Scalars['String'];
  value: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createNews: News;
  createPortfolio: Portfolio;
  createUser: User;
  deleteNews: News;
  deletePortfolio: Portfolio;
  deleteUser: User;
  editUser: User;
  login: Scalars['String'];
  logout: Auth;
};


export type MutationCreateNewsArgs = {
  data: NewsInput;
};


export type MutationCreatePortfolioArgs = {
  data: PortfolioInput;
};


export type MutationCreateUserArgs = {
  data: CreateUserInput;
};


export type MutationDeleteNewsArgs = {
  _id: Scalars['String'];
};


export type MutationDeletePortfolioArgs = {
  _id: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  _id: Scalars['String'];
};


export type MutationEditUserArgs = {
  _id: Scalars['String'];
  data: EditUserInput;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type News = {
  __typename?: 'News';
  _id: Scalars['ObjectId'];
  category: Scalars['String'];
  createdBy: Scalars['String'];
  date: Scalars['String'];
  description: Scalars['String'];
  image: Scalars['String'];
  keywords: Array<Scalars['String']>;
  title: Scalars['String'];
};

export type NewsInput = {
  category: Scalars['String'];
  description: Scalars['String'];
  image: Scalars['String'];
  keywords: Array<Scalars['String']>;
  title: Scalars['String'];
};

export type PersonalPath = {
  __typename?: 'PersonalPath';
  _id: Scalars['String'];
  headline?: Maybe<Scalars['String']>;
  pieces: Array<Piece>;
};

export type PersonalPathInput = {
  _id: Scalars['String'];
  headline: Scalars['String'];
  pieces: Array<PieceInput>;
};

export type Piece = {
  __typename?: 'Piece';
  description?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['String']>;
};

export type PieceInput = {
  description: Scalars['String'];
  location: Scalars['String'];
  type: Scalars['String'];
  year: Scalars['String'];
};

export type Portfolio = {
  __typename?: 'Portfolio';
  _id: Scalars['ObjectId'];
  category: Scalars['String'];
  createdBy: Scalars['String'];
  image: Scalars['String'];
  link: Scalars['String'];
  name: Scalars['String'];
};

export type PortfolioInput = {
  category: Scalars['String'];
  link: Scalars['String'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  currentUser: User;
  news: News;
  newses: Array<News>;
  portfolio: Portfolio;
  portfolios: Array<Portfolio>;
  user: User;
  users: Array<User>;
};


export type QueryNewsArgs = {
  _id: Scalars['String'];
};


export type QueryPortfolioArgs = {
  _id: Scalars['String'];
};


export type QueryUserArgs = {
  _id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ObjectId'];
  abilities?: Maybe<Array<Abilities>>;
  address?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['String']>;
  cv?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  facebook?: Maybe<Scalars['String']>;
  facts?: Maybe<Array<Fact>>;
  form?: Maybe<Scalars['Boolean']>;
  fullname: Scalars['String'];
  github?: Maybe<Scalars['String']>;
  googleIframe?: Maybe<Scalars['String']>;
  img?: Maybe<Scalars['String']>;
  linkedin?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  personalPath?: Maybe<Array<PersonalPath>>;
  phone?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  residence?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Scalars['String']>>;
  twitter?: Maybe<Scalars['String']>;
};

export type NewsesQueryVariables = Exact<{ [key: string]: never; }>;


export type NewsesQuery = { __typename?: 'Query', newses: Array<{ __typename?: 'News', _id: any, title: string, category: string, date: string, image: string, keywords: Array<string>, createdBy: string, description: string }> };

export type NewsQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type NewsQuery = { __typename?: 'Query', news: { __typename?: 'News', _id: any, title: string, category: string, date: string, image: string, keywords: Array<string>, createdBy: string, description: string } };

export type CreateNewsMutationVariables = Exact<{
  data: NewsInput;
}>;


export type CreateNewsMutation = { __typename?: 'Mutation', createNews: { __typename?: 'News', _id: any, title: string, category: string, date: string, image: string, keywords: Array<string>, createdBy: string, description: string } };

export type DeleteNewsMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteNewsMutation = { __typename?: 'Mutation', deleteNews: { __typename?: 'News', _id: any, title: string, category: string } };

export type PortfoliosQueryVariables = Exact<{ [key: string]: never; }>;


export type PortfoliosQuery = { __typename?: 'Query', portfolios: Array<{ __typename?: 'Portfolio', _id: any, name: string, category: string, image: string, link: string, createdBy: string }> };

export type PortfolioQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type PortfolioQuery = { __typename?: 'Query', portfolio: { __typename?: 'Portfolio', _id: any, name: string, category: string, image: string, link: string, createdBy: string } };

export type CreatePortfolioMutationVariables = Exact<{
  data: PortfolioInput;
}>;


export type CreatePortfolioMutation = { __typename?: 'Mutation', createPortfolio: { __typename?: 'Portfolio', _id: any, name: string, category: string, image: string, link: string, createdBy: string } };

export type DeletePortfolioMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeletePortfolioMutation = { __typename?: 'Mutation', deletePortfolio: { __typename?: 'Portfolio', _id: any, name: string, category: string } };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', _id: any, fullname: string, email: string, position?: string | null, age?: string | null }> };

export type UserQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', _id: any, fullname: string, email: string, password: string, position?: string | null, img?: string | null, phone?: string | null, residence?: string | null, address?: string | null, googleIframe?: string | null, age?: string | null, form?: boolean | null, facebook?: string | null, linkedin?: string | null, twitter?: string | null, github?: string | null, description?: string | null, cv?: string | null, facts?: Array<{ __typename?: 'Fact', _id: string, name: string, value?: number | null }> | null, personalPath?: Array<{ __typename?: 'PersonalPath', _id: string, headline?: string | null, pieces: Array<{ __typename?: 'Piece', year?: string | null, location?: string | null, type?: string | null, description?: string | null }> }> | null, abilities?: Array<{ __typename?: 'Abilities', knowledges: Array<string>, skills: Array<string> }> | null } };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Query', currentUser: { __typename?: 'User', _id: any, fullname: string, email: string, password: string, position?: string | null, img?: string | null, phone?: string | null, residence?: string | null, address?: string | null, googleIframe?: string | null, age?: string | null, form?: boolean | null, facebook?: string | null, linkedin?: string | null, twitter?: string | null, github?: string | null, description?: string | null, cv?: string | null, facts?: Array<{ __typename?: 'Fact', _id: string, name: string, value?: number | null }> | null, personalPath?: Array<{ __typename?: 'PersonalPath', _id: string, headline?: string | null, pieces: Array<{ __typename?: 'Piece', year?: string | null, location?: string | null, type?: string | null, description?: string | null }> }> | null, abilities?: Array<{ __typename?: 'Abilities', knowledges: Array<string>, skills: Array<string> }> | null } };

export type CreateUserMutationVariables = Exact<{
  data: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', _id: any, fullname: string, email: string } };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: { __typename?: 'User', _id: any, fullname: string, email: string } };

export type EditUserMutationVariables = Exact<{
  id: Scalars['String'];
  data: EditUserInput;
}>;


export type EditUserMutation = { __typename?: 'Mutation', editUser: { __typename?: 'User', _id: any, fullname: string, email: string, password: string, position?: string | null, img?: string | null, phone?: string | null, residence?: string | null, address?: string | null, googleIframe?: string | null, age?: string | null, facebook?: string | null, linkedin?: string | null, twitter?: string | null, github?: string | null, form?: boolean | null, description?: string | null, cv?: string | null, facts?: Array<{ __typename?: 'Fact', _id: string, name: string, value?: number | null }> | null, personalPath?: Array<{ __typename?: 'PersonalPath', _id: string, headline?: string | null, pieces: Array<{ __typename?: 'Piece', year?: string | null, location?: string | null, type?: string | null, description?: string | null }> }> | null, abilities?: Array<{ __typename?: 'Abilities', knowledges: Array<string>, skills: Array<string> }> | null } };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: string };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: { __typename?: 'Auth', _id: any } };


export const NewsesDocument = `
    query Newses {
  newses {
    _id
    title
    category
    date
    image
    keywords
    createdBy
    description
  }
}
    `;
export const useNewsesQuery = <
      TData = NewsesQuery,
      TError = unknown
    >(
      variables?: NewsesQueryVariables,
      options?: UseQueryOptions<NewsesQuery, TError, TData>
    ) =>
    useQuery<NewsesQuery, TError, TData>(
      variables === undefined ? ['Newses'] : ['Newses', variables],
      fetchData<NewsesQuery, NewsesQueryVariables>(NewsesDocument, variables),
      options
    );
export const NewsDocument = `
    query News($id: String!) {
  news(_id: $id) {
    _id
    title
    category
    date
    image
    keywords
    createdBy
    description
  }
}
    `;
export const useNewsQuery = <
      TData = NewsQuery,
      TError = unknown
    >(
      variables: NewsQueryVariables,
      options?: UseQueryOptions<NewsQuery, TError, TData>
    ) =>
    useQuery<NewsQuery, TError, TData>(
      ['News', variables],
      fetchData<NewsQuery, NewsQueryVariables>(NewsDocument, variables),
      options
    );
export const CreateNewsDocument = `
    mutation createNews($data: NewsInput!) {
  createNews(data: $data) {
    _id
    title
    category
    date
    image
    keywords
    createdBy
    description
  }
}
    `;
export const useCreateNewsMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateNewsMutation, TError, CreateNewsMutationVariables, TContext>) =>
    useMutation<CreateNewsMutation, TError, CreateNewsMutationVariables, TContext>(
      ['createNews'],
      (variables?: CreateNewsMutationVariables) => fetchData<CreateNewsMutation, CreateNewsMutationVariables>(CreateNewsDocument, variables)(),
      options
    );
export const DeleteNewsDocument = `
    mutation DeleteNews($id: String!) {
  deleteNews(_id: $id) {
    _id
    title
    category
  }
}
    `;
export const useDeleteNewsMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<DeleteNewsMutation, TError, DeleteNewsMutationVariables, TContext>) =>
    useMutation<DeleteNewsMutation, TError, DeleteNewsMutationVariables, TContext>(
      ['DeleteNews'],
      (variables?: DeleteNewsMutationVariables) => fetchData<DeleteNewsMutation, DeleteNewsMutationVariables>(DeleteNewsDocument, variables)(),
      options
    );
export const PortfoliosDocument = `
    query Portfolios {
  portfolios {
    _id
    name
    category
    image
    link
    createdBy
  }
}
    `;
export const usePortfoliosQuery = <
      TData = PortfoliosQuery,
      TError = unknown
    >(
      variables?: PortfoliosQueryVariables,
      options?: UseQueryOptions<PortfoliosQuery, TError, TData>
    ) =>
    useQuery<PortfoliosQuery, TError, TData>(
      variables === undefined ? ['Portfolios'] : ['Portfolios', variables],
      fetchData<PortfoliosQuery, PortfoliosQueryVariables>(PortfoliosDocument, variables),
      options
    );
export const PortfolioDocument = `
    query Portfolio($id: String!) {
  portfolio(_id: $id) {
    _id
    name
    category
    image
    link
    createdBy
  }
}
    `;
export const usePortfolioQuery = <
      TData = PortfolioQuery,
      TError = unknown
    >(
      variables: PortfolioQueryVariables,
      options?: UseQueryOptions<PortfolioQuery, TError, TData>
    ) =>
    useQuery<PortfolioQuery, TError, TData>(
      ['Portfolio', variables],
      fetchData<PortfolioQuery, PortfolioQueryVariables>(PortfolioDocument, variables),
      options
    );
export const CreatePortfolioDocument = `
    mutation createPortfolio($data: PortfolioInput!) {
  createPortfolio(data: $data) {
    _id
    name
    category
    image
    link
    createdBy
  }
}
    `;
export const useCreatePortfolioMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreatePortfolioMutation, TError, CreatePortfolioMutationVariables, TContext>) =>
    useMutation<CreatePortfolioMutation, TError, CreatePortfolioMutationVariables, TContext>(
      ['createPortfolio'],
      (variables?: CreatePortfolioMutationVariables) => fetchData<CreatePortfolioMutation, CreatePortfolioMutationVariables>(CreatePortfolioDocument, variables)(),
      options
    );
export const DeletePortfolioDocument = `
    mutation DeletePortfolio($id: String!) {
  deletePortfolio(_id: $id) {
    _id
    name
    category
  }
}
    `;
export const useDeletePortfolioMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<DeletePortfolioMutation, TError, DeletePortfolioMutationVariables, TContext>) =>
    useMutation<DeletePortfolioMutation, TError, DeletePortfolioMutationVariables, TContext>(
      ['DeletePortfolio'],
      (variables?: DeletePortfolioMutationVariables) => fetchData<DeletePortfolioMutation, DeletePortfolioMutationVariables>(DeletePortfolioDocument, variables)(),
      options
    );
export const UsersDocument = `
    query Users {
  users {
    _id
    fullname
    email
    position
    age
  }
}
    `;
export const useUsersQuery = <
      TData = UsersQuery,
      TError = unknown
    >(
      variables?: UsersQueryVariables,
      options?: UseQueryOptions<UsersQuery, TError, TData>
    ) =>
    useQuery<UsersQuery, TError, TData>(
      variables === undefined ? ['Users'] : ['Users', variables],
      fetchData<UsersQuery, UsersQueryVariables>(UsersDocument, variables),
      options
    );
export const UserDocument = `
    query User($id: String!) {
  user(_id: $id) {
    _id
    fullname
    email
    password
    position
    img
    phone
    residence
    address
    googleIframe
    age
    form
    facebook
    linkedin
    twitter
    github
    facebook
    description
    cv
    facts {
      _id
      name
      value
    }
    personalPath {
      _id
      headline
      pieces {
        year
        location
        type
        description
      }
    }
    abilities {
      knowledges
      skills
    }
  }
}
    `;
export const useUserQuery = <
      TData = UserQuery,
      TError = unknown
    >(
      variables: UserQueryVariables,
      options?: UseQueryOptions<UserQuery, TError, TData>
    ) =>
    useQuery<UserQuery, TError, TData>(
      ['User', variables],
      fetchData<UserQuery, UserQueryVariables>(UserDocument, variables),
      options
    );
export const CurrentUserDocument = `
    query currentUser {
  currentUser {
    _id
    fullname
    email
    password
    position
    img
    phone
    residence
    address
    googleIframe
    age
    form
    facebook
    linkedin
    twitter
    github
    description
    cv
    facts {
      _id
      name
      value
    }
    personalPath {
      _id
      headline
      pieces {
        year
        location
        type
        description
      }
    }
    abilities {
      knowledges
      skills
    }
  }
}
    `;
export const useCurrentUserQuery = <
      TData = CurrentUserQuery,
      TError = unknown
    >(
      variables?: CurrentUserQueryVariables,
      options?: UseQueryOptions<CurrentUserQuery, TError, TData>
    ) =>
    useQuery<CurrentUserQuery, TError, TData>(
      variables === undefined ? ['currentUser'] : ['currentUser', variables],
      fetchData<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, variables),
      options
    );
export const CreateUserDocument = `
    mutation CreateUser($data: CreateUserInput!) {
  createUser(data: $data) {
    _id
    fullname
    email
  }
}
    `;
export const useCreateUserMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateUserMutation, TError, CreateUserMutationVariables, TContext>) =>
    useMutation<CreateUserMutation, TError, CreateUserMutationVariables, TContext>(
      ['CreateUser'],
      (variables?: CreateUserMutationVariables) => fetchData<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, variables)(),
      options
    );
export const DeleteUserDocument = `
    mutation DeleteUser($id: String!) {
  deleteUser(_id: $id) {
    _id
    fullname
    email
  }
}
    `;
export const useDeleteUserMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<DeleteUserMutation, TError, DeleteUserMutationVariables, TContext>) =>
    useMutation<DeleteUserMutation, TError, DeleteUserMutationVariables, TContext>(
      ['DeleteUser'],
      (variables?: DeleteUserMutationVariables) => fetchData<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, variables)(),
      options
    );
export const EditUserDocument = `
    mutation EditUser($id: String!, $data: EditUserInput!) {
  editUser(_id: $id, data: $data) {
    _id
    fullname
    email
    password
    position
    img
    phone
    residence
    address
    googleIframe
    age
    facebook
    linkedin
    twitter
    github
    form
    description
    cv
    facts {
      _id
      name
      value
    }
    personalPath {
      _id
      headline
      pieces {
        year
        location
        type
        description
      }
    }
    abilities {
      knowledges
      skills
    }
  }
}
    `;
export const useEditUserMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<EditUserMutation, TError, EditUserMutationVariables, TContext>) =>
    useMutation<EditUserMutation, TError, EditUserMutationVariables, TContext>(
      ['EditUser'],
      (variables?: EditUserMutationVariables) => fetchData<EditUserMutation, EditUserMutationVariables>(EditUserDocument, variables)(),
      options
    );
export const LoginDocument = `
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password)
}
    `;
export const useLoginMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<LoginMutation, TError, LoginMutationVariables, TContext>) =>
    useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
      ['Login'],
      (variables?: LoginMutationVariables) => fetchData<LoginMutation, LoginMutationVariables>(LoginDocument, variables)(),
      options
    );
export const LogoutDocument = `
    mutation Logout {
  logout {
    _id
  }
}
    `;
export const useLogoutMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<LogoutMutation, TError, LogoutMutationVariables, TContext>) =>
    useMutation<LogoutMutation, TError, LogoutMutationVariables, TContext>(
      ['Logout'],
      (variables?: LogoutMutationVariables) => fetchData<LogoutMutation, LogoutMutationVariables>(LogoutDocument, variables)(),
      options
    );