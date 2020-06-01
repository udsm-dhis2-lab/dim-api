# DHIS2 Integration Mediator API(DIM API)

### DIM API for interoperability between systems. API will provide access to receive data from other systems. 

![Greetings](https://github.com/hisptz/dim-api/workflows/Greetings/badge.svg)

## Introduction

University of Dar es salaam([UDSM](https://www.udsm.ac.tz/)), College of Information and Communication Technologies([CoICT](https://www.coict.udsm.ac.tz/)) - DHIS2 Team which is under Department of Computer Science and Engineering has initiated development of DHIS2 Integration Mediator(DIM Mediator) to facilitate interoperability activities across systems with the essence of establishing interoperability layer to address challenges faced during interoperability process across systems. Initiative has three components which are
- DIM Mediator Engine
- DIM API
- DIM Mediator Manager

DIM API is the main component here which abstract all the requirements for data exchange for system that decided to sent data towards the API. The development of all there components will go parallel to achieve what we pictured it as a straight forward solution for data exchange. As for any big system which involve innovation is not an overnight thing. DIM Mediator and all its components is evolving, The team will make sure all the requirements are accomodated to bring quality software as possible.

## Usage
### Report Generation
In order too use the API to get the report of already integrated data between two systems, the following syntax must be adhered in order to get desired results.

`
http://localhost:3000/api/reports?data=V95FW78EISl;zAH1xIT7l8x&period=2028;2018&from=ABC&to=XYZ&filter=status:failure&filter=transactionDate:2018-01-01
`
- **http://localhost:3000/**: it refers to the server address that you want to request a particular service to the server. Below is the explanation of each section of the address.
    * **http://**: This section of the API address, specifically it define the protocal the you use to perform a request to the server.

    * **localhost**: it define the address mapped to your server through the server's API address. Eg: `www.icodebible.io`

    * **:3000**: It refers to the port at which the service is mapped to the server. Always the default one are used.

- **api**: it is a convention that give you clear explanation that now you are requesting something to the server through the API endpoint.

- **reports**: it refers to the API endpoint where you are requesting data.

- **?**: After a keyword that define `API endpoint` you may see a the following symbol `?`. Anything that come after this symbol are used as query parameters to narrow down the results return from server that match a criteria passed in the query parameters.

To generate the report based on the above mentioned API, need some generic parameters that can be used to narrow down the results returned. Those parameters includes:
- Data to be exchanged i.e `dataElements`
- Frequency that used during data exchange i.e `period`
- System where data come from i.e `System Data From` eg: `DHIS2 HMIS`
- System where data was sent i.e `System Data Sent` e.g `National Health Portal`

    - **data**: it refers to the data elements used for data exchange between systems. In the address these data can be passed with the keyword `data` followed by list of `data` separated by `semi colon`

        > *Eg: data=**V95FW78EISl**;**zAH1xIT7l8x***

    - **period**: it refers to the frequency used during data exchange. i.e `Periods` and it is always separated by `semi colon` if the required data come from two or more periods

        > *Eg: *period=**2028**;**2018***

    - **from**: it refers to the system where the data come from. In this parameter we supply the `uuid` of the system where data come from. it is always a single sustem `uuid` here.

        > *Eg: *from=**EoUKkYfvP9F**

    - **to**: it refers to the system where the data is about to be sent. In this parameter we supply the `uuid` of of the receiving system. it is always a single sustem `uuid` here.

        > *Eg: *to=**okarI47VZEu**

    - **filter**: This is used as a very distinguishing factor for the results returned as lower level as possible. And the syntax for this is as follows:

        > *Eg: filter=**status**:**failure***
        - `filter` - keyword used to filter.
        - `=` - is used to defined API params to filter
        - `:` - content passed after this symbol is used to define the value that is going to be used in filtering column defined before the following symbol `=`

