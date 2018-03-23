import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from "apollo-boost";
import renderer from 'react-test-renderer';
import MockNetworkInterface from 'apollo-mocknetworkinterface';


import Gallery from './components/Gallery';



const createResponse = (request) => {

    return {
        data: {
            id: "cjf2qx3n8l5xw0925ex9fw1i2",
            link: "/?photo=7oS_26cb1Wo",
            uniq: "pop",
            pic: "https://images.unsplash.com/40/whtXWmDGTTuddi1ncK5v_IMG_0097.jpg"
        },
    };
};

const networkInterface = new MockNetworkInterface(createResponse, { timeout: 100 });
const client = new ApolloClient({ networkInterface, addTypename: false });




it('render without exploding', (done) => {
    const component = renderer.create((
        <ApolloProvider client={client}>
            <div>
                <Gallery />
            </div>
        </ApolloProvider>
    ));

});
