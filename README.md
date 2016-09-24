# Gladys Speak

Gladys hooks for enabling speaking in Gladys.

Need Gladys version >= 3.1.8.

## Documentation

To install this module : 

- Install the module in Gladys
- Reboot Gladys


## Warning

Gladys will speak to you only if you are at home ! (If you are not at home, it's useless to speak in an empty room).

To detect if you are at home, Gladys uses events.

First, to know in which home your Raspberry Pi is located, Gladys uses "machines" (you can configure it in parameters).
Especially the "me" field. She takes the machine where "me" is true. 

Then, she looks at events "back-at-home" and "left-home".

If last event for this particular house and with your user ID is "back-at-home", it means you are at home.

If not, it means your are in another place. 

