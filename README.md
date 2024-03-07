# spotify-api-sample

This is a sample TypeScript/React application that demonstrates how to interact with the Spotify API.

Please refer to the official [Spotify Developer Documentation](https://developer.spotify.com/documentation/web-api) for more information

## Prerequisites

Before running this application, make sure you have the following:

- Node.js installed on your machine
- A Spotify developer account and API credentials

## Getting Started

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/spotify-api-sample.git
   # spotify-api-sample

2. Install dependencies:

    ```bash
    cd spotify-api-sample
    npm install
    ```

3. Set up your Spotify API credentials:

    - Go to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/) and create a new application.
    - Once created, copy the Client ID and Client Secret.
    - Create a `.env` file in the root directory of the project and add the following:

        ```plaintext
            CLIENT_ID=your-client-id
            CLIENT_SECRET=your-client-secret
        ```

4. Start the application:

    ```bash
    npm start
    ```

5. Open your browser and navigate to `http://localhost:5173` to view the application.

## Usage

- The application allows you to search for songs, albums, and artists using the Spotify API.
- You can play preview tracks, save songs to your library, and view artist details.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
