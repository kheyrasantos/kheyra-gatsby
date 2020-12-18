import React from 'react';
import {Helmet} from 'react-helmet';

const Head = () => {
    return(
        <Helmet title="Kheyra Santos">
            <meta charset="utf-8" />
            <meta http-equiv="x-ua-compatible" content="ie=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous" />
            <link rel="stylesheet" href="https://use.typekit.net/jcb8yji.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />

            <link rel="apple-touch-icon" sizes="120x120" href="/img/favicon/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png" />
            <link rel="manifest" href="/img/favicon/site.webmanifest" />
            <link rel="mask-icon" href="/img/favicon/safari-pinned-tab.svg" color="#ffffff" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="theme-color" content="#ffffff" />

            <link rel="stylesheet" href="css/foundation.css" />
            <link rel="stylesheet" href="css/app.css?v=1.0.1" />
        </Helmet>
    );
};

export default Head;
