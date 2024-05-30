# Shopping List App

LIVE DEMO: https://shopping-list-a412d.web.app/

Application useful for shopping. Main benefits in comparison to notepad:

* faster product addition thanks to list of common bought products
* easy management of product quantity
* support for units (l, ml, kg, g, custom units)
* easy editing of products on the list
* products devided into categories
* easy marking products as bought (or unbought)
* ability to share the list with others
* user-friendly and eye-pleasing interface


# Table of contents

* [General info](#general-info)

* [Technologies](#technologies)

* [Setup](#setup)

* [Application view](#application-view)



## General info
<p>Going shopping with my girlfriend we had a problem with the shopping list - everyone had their own list to which they added products, and before shopping we shared our lists with each other. Just sharing the list was **inconvenient, on top of that some products were repeated**. Therefore, I came up with the idea of writing an app that would simplify certain processes and **solve the above problems**. This is how the idea for the “Shopping List App” was born.</p>

<p>Just **sharing the list** with others allows you to easily and quickly **check what you are missing** when, for example, you stop by the store on your way home from work.</p>

<p>Products are assigned to **categories** - products of the same category are automatically placed next to each other in the list, avoiding walking around the store.</p>

<p>The application's interface and some of its functionalities were inspired by the “Listonic” application</p>



## Technologies

<ul>
  <li>React</li>
    <ul>
      <li>Styled Components</li>
      <li>uuid</li>
    </ul>
  <li>Firebase</li>
  <li>TypeScript</li>
  <li>Vite</li>  
</ul>



## Setup

<ol>
  <li>
    Clone the repository:

    ```commandline
    git clone https://github.com/writecleancode/shoppinglist-app
    ```
  </li>

  <li>
    Navigate to the project directory:

    ```commandline
    cd shoppinglist-app
    ```
  </li>

  <li>
    Install the dependencies:

    ```commandline
    npm install
    ```
  </li>

  <li>
    Start the development server:

    ```commandline
    npm run dev
    ```
  </li>

  <li>
    Open your browser and visit http://localhost:5173 to view the application.
  </li>

</ol>



## Application View