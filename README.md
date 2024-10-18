# Link Storage App

![Static Badge](https://img.shields.io/badge/Status-Finished-green)

A mobile application developed with Expo Framework that allows users to store and categorize web links for easy access and retrieval.

## Technologies Used:

* Expo
* React Native
* Typescript
* AsyncStorage

## Detailed Description:

This project leverages the Expo Framework to build a mobile app for both Android and iOS platforms. Its core functionality revolves around providing users with a streamlined way to store and manage web links, neatly organized by categories.

**Features:**

* **Categorized Links:** The main screen displays a list of stored links, filtered by categories for easy browsing.
* **Add New Link:**  A button in the top right corner leads the user to a dedicated screen for adding new links. This involves choosing a category, inputting the link's name, and providing the URL.
* **Link Details Modal:** Each link on the main screen has a button that opens a modal displaying detailed information about the link. Within this modal, users can open the link in their device's browser or delete the link from their storage.
* **Local Storage with AsyncStorage:**  Link data is persisted locally on the device using AsyncStorage, ensuring data is retained between app sessions.
* **Intuitive Navigation:** The app offers smooth transitions between the link list view and the add link screen.

**How to Run the Project:**

1. **Ensure Expo CLI is installed:** If not, run `npm install -g expo-cli`
2. **Clone the repository:** `git clone https://github.com/your-username/link-storage-app.git`
3. **Navigate to the project directory:** `cd link-storage-app`
4. **Install dependencies:** `npm install` or `yarn install`
5. **Start the development server:** `expo start`
6. **Run the app on a physical device or emulator:** Follow the instructions provided by the Expo CLI after running `expo start`. You can scan the QR code with the Expo Go app or use an Android/iOS simulator.


**Contributions:**

Contributions are encouraged! Please open issues for bug reports, feature suggestions, or submit pull requests with your enhancements.
