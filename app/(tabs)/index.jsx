import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function App() {
  const [displayValue, setDisplayValue] = useState("0");
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState("");

  //functions

  const handleNumberInput = (num) => {
    if (displayValue === "0") {
      setDisplayValue(num.toString());
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  const handleOperatorInput = (operator) => {
    setOperator(operator);
    setFirstValue(displayValue);
    setDisplayValue("0");
  };

  const handleEqual = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);

    if (operator === "+") {
      setDisplayValue((num1 + num2).toString());
    } else if (operator === "-") {
      setDisplayValue((num1 - num2).toString());
    } else if (operator === "*") {
      setDisplayValue((num1 * num2).toString());
    } else if (operator === "/") {
      setDisplayValue((num1 / num2).toString());
    }
    setOperator(null);
    setFirstValue("");
  };

  const handleClear = () => {
    setDisplayValue("0");
    setOperator(null);
    setFirstValue("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{displayValue}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          <Pressable style={styles.button} onPress={() => handleNumberInput(7)}>
            <Text style={styles.buttonText}>7</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => handleNumberInput(8)}>
            <Text style={styles.buttonText}>8</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => handleNumberInput(9)}>
            <Text style={styles.buttonText}>9</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.operatorButton]}
            onPress={() => handleOperatorInput("/")}
          >
            <Text style={[styles.buttonText, styles.operatorButtonText]}>
              /
            </Text>
          </Pressable>
        </View>

        <View style={styles.row}>
          <Pressable style={styles.button} onPress={() => handleNumberInput(4)}>
            <Text style={styles.buttonText}>4</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => handleNumberInput(5)}>
            <Text style={styles.buttonText}>5</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => handleNumberInput(6)}>
            <Text style={styles.buttonText}>6</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.operatorButton]}
            onPress={() => handleOperatorInput("*")}
          >
            <Text style={[styles.buttonText, styles.operatorButtonText]}>
              x
            </Text>
          </Pressable>
        </View>

        <View style={styles.row}>
          <Pressable style={styles.button} onPress={() => handleNumberInput(1)}>
            <Text style={styles.buttonText}>1</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => handleNumberInput(2)}>
            <Text style={styles.buttonText}>2</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => handleNumberInput(3)}>
            <Text style={styles.buttonText}>3</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.operatorButton]}
            onPress={() => handleOperatorInput("-")}
          >
            <Text style={[styles.buttonText, styles.operatorButtonText]}>
              -
            </Text>
          </Pressable>
        </View>

        <View style={styles.row}>
          <Pressable
            style={[styles.button, styles.zeroButton]}
            onPress={() => handleNumberInput(0)}
          >
            <Text style={[styles.buttonText, styles.zeroButtonText]}>0</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.operatorButton]}
            onPress={() => handleOperatorInput("+")}
          >
            <Text style={[styles.buttonText, styles.operatorButton]}>+</Text>
          </Pressable>

          <Pressable style={styles.equalButton} onPress={handleEqual}>
            <Text style={styles.equalButtonText}>=</Text>
          </Pressable>
        </View>

        <Pressable style={styles.clearButton} onPress={handleClear}>
          <Text style={styles.clearButtonText}>C</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  displayContainer: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 20,
  },
  displayText: {
    fontSize: 48,
    color: "black",
  },
  buttonContainer: {
    flex: 3,
    width: "80%",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  button: {
    flex: 1,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    elevation: 3,
    margin: 2,
    padding: 15,
  },
  buttonText: {
    fontSize: 34,
    color: "black",
  },
  zeroButton: {
    flex: 2,
    paddingLeft: 35,
    paddingRight: 35,
  },
  zeroButtonText: {
    marginLeft: 10,
  },
  operatorButton: {
    backgroundColor: "#f0f0f0",
  },
  operatorButtonText: {
    color: "blue",
  },
  equalButton: {
    flex: 1,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    elevation: 3,
  },
  equalButtonText: {
    fontSize: 32,
    color: "white",
  },
  clearButton: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    marginTop: 10,
    elevation: 3,
    padding: 10,
    elevation: 3,
    padding: 10,
  },
  clearButtonText: {
    fontSize: 24,
    color: "white",
  },
});
