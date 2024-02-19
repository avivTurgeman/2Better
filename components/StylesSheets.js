
import {StyleSheet} from "react-native";

const stylesProfile = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    marginLeft: 20,
  },
  buttonLogOut: {
    width: "20%",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    position: "absolute", // Use absolute positioning
    top: 50, // Align to the bottom
    left: 300, // Align to the left
    marginBottom: 10, // Optional margin to add some space from the bottom
    marginLeft: 10, // Optional margin to add some space from the left
  },
  buttonDelete: {
    backgroundColor: "#990000",
    width: "40%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 50,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonTextEdit: {
    color: "#366A68",
    fontWeight: "700",
    fontSize: 16,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  input: {
    width: "100%",
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
  },
  label: {
    backgroundColor: "#366A68",
    color: "black",
    fontSize: 18,
    padding: 5,
    borderRadius: 10,
    fontWeight: "bold",
    marginTop: 10,
  },
  valueName: {
    fontWeight: "bold",
    fontSize: 16,
    flexDirection: "row",
    fontSize: 28,
    marginLeft: 4,
  },
  valueNew: {
    fontSize: 16,
    flexDirection: "row",
    fontSize: 22,
    marginLeft: 4,
  },
  buttonEdit: {
    width: "30%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 50,
  }
});
const stylesAboutUs = StyleSheet.create({
  containerScroll: {
      flexDirection: "row",
      alignItems: "center",
  },

  container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      top: 100,
  },
  container1: {
      alignItems: "center",
      justifyContent: "center",
      marginTop: 150,
      bottom: 80,
  },
  container2: {
      alignItems: "center",
      justifyContent: "center",
      marginTop: 110,
      bottom: 80,
      left: 20,
  },
  container3: {
      alignItems: "center",
      justifyContent: "center",
      marginTop: 110,
      bottom: 80,
      left: 10,
  },
  containerEnd: {
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30,
      bottom: 80,
      left: 40,
  },
  defualtTopTextEdit: {
      color: "black",
      fontWeight: "600",
      fontStyle: "italic",
      fontSize: 22,
      right: 65,
      bottom: 90,
  },
  defualtTopTextEdit3: {
      color: "black",
      fontWeight: "600",
      fontStyle: "italic",
      fontSize: 22,
      right: 15,
      bottom: 90,
  },
  topTextEdit: {
      color: "black",
      fontWeight: "700",
      fontSize: 40,
      right: 70,
      bottom: 10,
  },
  defualtTextEdit: {
      color: "black",
      fontSize: 16,
      marginLeft: 40,
      marginBottom: 140,
  },    
  defualtTextEdit1: {
      color: "black",
      fontSize: 16,
      marginLeft: 30,
      marginTop: -80,
  },
  defualtTextEdit2: {
      color: "black",
      fontSize: 16,
      marginLeft: 10,
      marginTop: -80,
  },
  defualtTextEdit3: {
      color: "black",
      fontSize: 16,
      marginLeft: 30,
      marginTop: -80,
  },
  endTextEdit:{
      color: "black",
      fontSize: 17,
      fontWeight: "600",
  },
  backgroundImage: {
      flex: 1,
      width: "100%",
      height: "100%",
      justifyContent: "center",
  },
  backButton: {
      width: "20%",
      padding: 10,
      borderRadius: 10,
      alignItems: "center",
      position: "absolute",
      top: 30,
      left: -18,
      marginBottom: 10,
      marginLeft: 10,
  },
});
const stylesHome = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  containerText: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: -250,
    marginBottom: -20,
  },
  containerTextSupport: {
    flexDirection: "row",
    marginTop: 100,
    marginBottom: 30,
    marginLeft: -50,
  },
  containerTextUS: {
    flexDirection: "row",
    marginTop: -10,
    marginBottom: 30,
    marginLeft: -50,
  },
  containerScrollers: {
    marginTop: 80,
  },
  containerIcons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: -100,
  },
  // backgroundImage: {
  //   flex: 1,
  //   width: "100%",
  //   height: "100%",
  //   justifyContent: "center",
  // },
  notificationBotton: {
    padding: 10,
    borderRadius: 10,
    marginTop: 5,
    marginLeft: 5,
    borderRadius: 50,
  },
  profileButton: {
    padding: 10,
    borderRadius: 10,
    marginTop: 0,
    marginLeft: 280,
    marginTop: 0,
    marginLeft: 280,
    borderRadius: 50,
  },
  badge: {
    position: "absolute",
    top: 20,
    right: -10,
    backgroundColor: "#8B1B1B",
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontWeight: "bold",
  },
  scrollContainer: {
    flex: 1,
    //justifyContent: "flex-start", // Align items at the top
    alignItems: "center",
    paddingTop: 30, // Add padding to give some space at the top
    flexDirection: "row",
    gap: 35,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  backButton: {
    width: "20%",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    position: "absolute", // Use absolute positioning
    top: 0, // Align to the bottom
    left: -18, // Align to the left
    marginBottom: 10, // Optional margin to add some space from the bottom
    marginLeft: 10, // Optional margin to add some space from the left
  },
  backButtonText: {
    alignSelf: "center",
    color: "white",
  },
  card: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255 , 0.4)",
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 30,
    flexDirection: "column",
    gap: 10,
  },
  cardTopRow: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },
  cardMiddleRow: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconAndTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  businessLogo: {
    height: 50,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    width: 50,
    borderRadius: 15,
  },
  title: {
    fontWeight: "800",
    alignSelf: "flex-start",
  },
  subTitle: {
    opacity: 0.6,
    alignSelf: "flex-start",
  },
  button: {
    backgroundColor: "#3B82F6",
    width: 240,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    alignSelf: "center",
    color: "white",
  },
  iconText: {
    fontWeight: "bold",
    fontSize: 20, // Adjust the font size as needed
  },
  logo: {
    width: 70, // Adjust the width as needed
    height: 70, // Adjust the height as needed
    resizeMode: "contain", // Options: 'cover', 'contain', 'stretch', 'repeat', 'center'
  },
  buttonTextPage: {
    alignSelf: "center",
    color: "black",
    fontSize: 20,
    marginLeft: 25,
    marginTop: 300,
    fontStyle: "italic",
    fontWeight: "bold",
    letterSpacing: 1,
  },
  buttomTextPage: {
    alignSelf: "center",
    color: "black",
    fontStyle: "italic",
    fontWeight: "bold",
    letterSpacing: 1,
    marginLeft: 100,
  },
});

export {stylesProfile , stylesAboutUs ,stylesHome}
