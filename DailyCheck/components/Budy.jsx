import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  Pressable,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";

export default function Budy() {
  const [visible1, setvisible1] = useState(false);
  const [visible2, setvisible2] = useState(false);
  const [visible3, setvisible3] = useState(false);
  const [visible4, setvisible4] = useState(false);
  const [visible5, setvisible5] = useState(false);
  const [visible6, setvisible6] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <Modal transparent visible={visible1} animationType="slide">
          <View style={styles.modalbg}>
            <View style={styles.modalcontainer}>
              <TouchableOpacity
                onPress={() => {
                  setvisible1(false);
                }}
                style={styles.close}
              >
                <Image
                  source={require("../assets/close.png")}
                  style={styles.closebtn}
                ></Image>
              </TouchableOpacity>
              <ScrollView>
                <View>
                  <Text style={styles.modaltitle}>
                    What is plastic pollution?
                  </Text>
                  <Text style={styles.modaltext}>
                    Plastic waste, or plastic pollution, is the accumulation of
                    plastic objects like plastic bottles and much more in the
                    Earth’s environment that adversely affects wildlife,
                    wildlife habitat, and humans.
                  </Text>
                  <Text style={styles.modaltitle}>How did it start?</Text>
                  <Text style={styles.modaltext}>
                    Since the late 20th century, we have depended on plastic as
                    an affordable, versatile and durable material. However,
                    since the majority of plastic materials take centuries to
                    degrade, all of the plastic that has been sent to landfills
                    in the UK still exists — and yet we’re still producing and
                    consuming more of it. That plastic has to go somewhere, and
                    it’s frequently either dumped carelessly on land or in
                    rivers in developing countries, before ending up in the
                    ocean, where it threatens marine life. The fact is, we
                    simply can’t cope with the amount of plastic on our planet —
                    nor the amount that continues to be produced.
                  </Text>
                  <Text style={styles.modaltitle}>How can you help?</Text>
                  <Text style={styles.modaltext}>
                    Reduce your business’ or personal output of plastic waste,
                    try switching from plastic materials to paper or glass
                    wherever you can, as these materials are widely recycled.
                    Reducing (or ideally cutting out altogether) your
                    consumption of plastic water bottles, plastic bags, and
                    straws can also make a huge difference.
                  </Text>
                </View>
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
      <View>
        <Modal transparent visible={visible2} animationType="slide">
          <View style={styles.modalbg}>
            <View style={styles.modalcontainer}>
              <TouchableOpacity
                onPress={() => {
                  setvisible2(false);
                }}
                style={styles.close}
              >
                <Image
                  source={require("../assets/close.png")}
                  style={styles.closebtn}
                ></Image>
              </TouchableOpacity>
              <ScrollView>
                <Text style={styles.modaltitle}>What is solid waste?</Text>
                <Text style={styles.modaltext}>
                  Solid waste is the unwanted or useless solid materials
                  generated from human activities in residential, industrial or
                  commercial areas. It may be categorised in three ways.
                  According to its origin, contents and hazard potential.
                </Text>
                <Text style={styles.modaltitle}>How is it dangerous?</Text>
                <Text style={styles.modaltext}>
                  Solid waste damps are seriously spoiling the environmental
                  conditions in developing countries. An inefficient municipal
                  solid waste management system may create serious negative
                  environmental impacts like infectious diseases, land and water
                  pollution, obstruction of drains and loss of biodiversity.
                </Text>
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
      <View>
        <Modal transparent visible={visible3} animationType="slide">
          <View style={styles.modalbg}>
            <View style={styles.modalcontainer}>
              <TouchableOpacity
                onPress={() => {
                  setvisible3(false);
                }}
                style={styles.close}
              >
                <Image
                  source={require("../assets/close.png")}
                  style={styles.closebtn}
                ></Image>
              </TouchableOpacity>
              <ScrollView>
                <Text style={styles.modaltitle}>What is E-waste?</Text>
                <Text style={styles.modaltext}>
                  E-waste is any electrical or electronic equipment that’s been
                  discarded. This includes working and broken items that are
                  thrown in the garbage or donated to a charity reseller like
                  Goodwill. Often, if the item goes unsold in the store, it will
                  be thrown away. E-waste is particularly dangerous due to toxic
                  chemicals that naturally leach from the metals inside when
                  buried.
                </Text>
                <Text style={styles.modaltitle}>How is it dangerous?</Text>
                <Text style={styles.modaltext}>
                  According to the World Health Organization (WHO), health risks
                  may result from direct contact with toxic materials that leach
                  from e-waste. These include minerals such as lead, cadmium,
                  chromium, brominated flame retardants, or polychlorinated
                  biphenyls (PCBs). Danger can come from inhalation of the toxic
                  fumes, as well as from the accumulation of chemicals in soil,
                  water, and food. This puts not just people in danger but land
                  and sea animals as well. In developing countries, the risks
                  are exceptionally high because some developed countries send
                  their e-waste there. Studies have shown this global e-waste
                  has detrimental effects on the people that work with the
                  e-waste but also the people that live around it.
                </Text>
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
      <View>
        <Modal transparent visible={visible4} animationType="slide">
          <View style={styles.modalbg}>
            <View style={styles.modalcontainer}>
              <TouchableOpacity
                onPress={() => {
                  setvisible4(false);
                }}
                style={styles.close}
              >
                <Image
                  source={require("../assets/close.png")}
                  style={styles.closebtn}
                ></Image>
              </TouchableOpacity>
              <ScrollView>
                <Text style={styles.modaltitle}>What are scraps?</Text>
                <Text style={styles.modaltext}>
                  Scrap consists of recyclable materials, usually metals, left
                  over from product manufacturing and consumption, such as parts
                  of vehicles, building supplies, and surplus materials. Unlike
                  waste, scrap has monetary value, especially recovered metals,
                  and non-metallic materials are also recovered for recycling.
                  Once collected, the materials are sorted into types —
                  typically metal scrap will be crushed, shredded, and sorted
                  using mechanical processes.
                </Text>
                <Text style={styles.modaltitle}>How are they dangerous?</Text>
                <Text style={styles.modaltext}>
                  Great potential exists in the scrap metal industry for
                  accidents in which a hazardous material present in scrap
                  causes death, injury, or environmental damage.
                </Text>
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
      <View>
        <Modal transparent visible={visible5} animationType="slide">
          <View style={styles.modalbg}>
            <View style={styles.modalcontainer}>
              <TouchableOpacity
                onPress={() => {
                  setvisible5(false);
                }}
                style={styles.close}
              >
                <Image
                  source={require("../assets/close.png")}
                  style={styles.closebtn}
                ></Image>
              </TouchableOpacity>
              <ScrollView>
                <Text style={styles.modaltitle}>What is paper waste?</Text>
                <Text style={styles.modaltext}>
                  Paper Waste is a severe problem in many industries and
                  offices. Because of printing mistakes, junk mails, billings,
                  and packaging, the paper may comprise up to 70% of a company's
                  total waste. An average office employee would be using about
                  10,000 sheets of paper in a year
                </Text>
                <Text style={styles.modaltitle}>How is it dangerous?</Text>
                <Text style={styles.modaltext}>
                  Littered areas breed bacteria and attract insects and rodents,
                  which spread the bacteria and cause illness. Paper contains
                  toxins that seep into soil as the paper decomposes. These
                  toxins are carried into waterways via storm water. Animals eat
                  litter and become ill or die.
                </Text>
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
      <View>
        <Modal transparent visible={visible6} animationType="slide">
          <View style={styles.modalbg}>
            <View style={styles.modalcontainer}>
              <TouchableOpacity
                onPress={() => {
                  setvisible6(false);
                }}
                style={styles.close}
              >
                <Image
                  source={require("../assets/close.png")}
                  style={styles.closebtn}
                ></Image>
              </TouchableOpacity>
              <ScrollView>
                <Text style={styles.modaltitle}>What is chemical waste?</Text>
                <Text style={styles.modaltext}>
                  Chemical waste is any solid, liquid, or gaseous waste material
                  that, if improperly managed or disposed of, may pose
                  substantial hazards to human health and the environment.
                </Text>
                <Text style={styles.modaltitle}>How is it dangerous?</Text>
                <Text style={styles.modaltext}>
                  Toxic waste has been implicated in deaths and health problems
                  such as cancers, birth defects, miscarriages, low birth
                  weight, neurological disorders, liver disease, developmental
                  disorders, hypertension, and heart defects. In ecosystems,
                  toxic wastes have caused substantial damage to animal and
                  plant populations.
                </Text>
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>

      <View>
        <View>
          <View style={styles.LoveMaker}>
            <TouchableOpacity
              style={styles.bitBybit}
              onPress={() => setvisible1(true)}
            >
              <Image
                style={styles.picture}
                source={require("../assets/plastic.png")}
              />
              <Text style={{ fontSize: 20 }}>Plastic</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bitBybit}
              onPress={() => setvisible2(true)}
            >
              <Image
                style={styles.picture}
                source={require("../assets/solidwaste.png")}
              />
              <Text style={{ fontSize: 20 }}>Solid Waste</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.LoveMaker}>
            <TouchableOpacity
              style={styles.bitBybit}
              onPress={() => setvisible3(true)}
            >
              <Image
                style={styles.picture}
                source={require("../assets/E-waste.png")}
              />
              <Text style={{ fontSize: 20 }}>E-Waste</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bitBybit}
              onPress={() => setvisible4(true)}
            >
              <Image
                style={styles.picture}
                source={require("../assets/Scrape.png")}
              />
              <Text style={{ fontSize: 20 }}>Scraps</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.LoveMaker}>
            <TouchableOpacity
              style={styles.bitBybit}
              onPress={() => setvisible5(true)}
            >
              <Image
                style={styles.picture}
                source={require("../assets/Paper.png")}
              />
              <Text style={{ fontSize: 20 }}>Paper</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bitBybit}
              onPress={() => setvisible6(true)}
            >
              <Image
                style={styles.picture}
                source={require("../assets/other.png")}
              />
              <Text style={{ fontSize: 20 }}>Chemicals</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: "30%",
  },

  picture: {
    width: 120,
    height: 120,
    marginLeft: "13%",
    marginRight: "13%",
  },

  bitBybit: {
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
    padding: "3%",
  },

  LoveMaker: {
    flexDirection: "row",
    justifyContent: "center",
  },

  modalbg: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalcontainer: {
    backgroundColor: "#09A8B3",
    width: "90%",
    height: "70%",
    margin: "4%",
    borderRadius: 10,
    elevation: 20,
  },

  modaltext: {
    color: "white",
    margin: "3%",
    fontSize: 18,
  },

  close: {
    margin: "2%",
    alignItems: "flex-end",
  },
  closebtn: {
    width: 25,
    height: 25,
    marginBottom: "2%",
  },
  modaltitle: {
    color: "black",
    fontWeight: "bold",
    margin: "3%",
    fontSize: 22,
  },
});
