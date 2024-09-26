Why does the program constantly run without me pressing the button:

#include "SoftwareSerial.h"
#include "DFRobotDFPlayerMini.h"
// Pin definitions
const int stepPin = 2; // STEP pin on A4988
const int dirPin = 3; // DIR pin on A4988
const int sleepPin = 5; // SLEEP pin on A4988
const int resetPin = 6; // RESET pin on A4988
const int buttonPin = 4;// Button pin
// DFPlayer Mini
SoftwareSerial mySoftwareSerial(10, 11);
DFRobotDFPlayerMini myDFPlayer;
// Motor control parameters
#define FEED_SPEED 2000 // Delay between motor steps (microseconds)
#define STEPS_FRW 19 // Steps forward
#define STEPS_BKW 12 // Steps backward
#define PORTION_AMT 50 // How many revolutions
// Speak control paramaters
#define VOLUME 30
void setup() {
pinMode(stepPin, OUTPUT);
pinMode(dirPin, OUTPUT);
pinMode(sleepPin, OUTPUT);
pinMode(resetPin, OUTPUT);
pinMode(buttonPin, INPUT_PULLUP);
digitalWrite(resetPin, HIGH); // Keep reset pin high
digitalWrite(sleepPin, LOW); // Start with motor asleep
 //Serial.begin(9600);
mySoftwareSerial.begin(9600);
Serial.begin(115200);
Serial.println("Initialising DFPlayer...");
Serial.println("Setup complete. Press the button to start motor.");
if (!myDFPlayer.begin(mySoftwareSerial)) {
Serial.println("Unable to begin:");
Serial.println("1.Please recheck the connection!");
Serial.println("2.Please insert the SD card!");
while(true);
 }
Serial.println("DFPlayer Mini online.");
myDFPlayer.volume(VOLUME);
}
void loop() {
if (digitalRead(buttonPin) == LOW) {
Serial.println("Button pressed. Starting motor rotation.");
wakeMotor();
myDFPlayer.play(1);
delay(3000);
feed();
sleepMotor();
delay(500); // Debounce delay
 }
}
void feed() {
for (int i = 0; i < PORTION_AMT; i++) { // Perform 10 revolutions
oneRev();
 }
}
void oneRev() {
 // Backward motion
digitalWrite(dirPin, LOW);
for (int i = 0; i < STEPS_BKW; i++) {
step();
 }
 // Forward motion
digitalWrite(dirPin, HIGH);
for (int i = 0; i < STEPS_FRW; i++) {
step();
 }
}
void step() {
digitalWrite(stepPin, HIGH);
delayMicroseconds(FEED_SPEED);
digitalWrite(stepPin, LOW);
delayMicroseconds(FEED_SPEED);
}
void wakeMotor() {
digitalWrite(sleepPin, HIGH);
delay(5); // Short delay to allow driver to wake up
}
void sleepMotor() {
digitalWrite(sleepPin, LOW);
}