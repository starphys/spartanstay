package com.spartanstay.spartanstay.controller;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CustomerControllerTest {

    /**
     * This method will make sure all testing methods are uniform when they begin
     */
    @BeforeEach
    void setUp() {
        //examples of things to do
        //currentUserEmail = spartanstay@gmail.com
        //currentUserName = "";
    }

    /**
     * This method will make sure all testing methods are uniform when they begin, and making sure no testing data is saved in main file
     */
    @AfterEach
    void tearDown() {
    }

    @Test
    void methodName()
    {
        //this will make sure all testing methods to test are uniform in starting details (current user data etc)
        setUp();

        /**
         * some examples of what you can use
         *         assertEquals();
         *         assertAll();
         *         assertTrue();
         */

        //this will make sure all testing methods are starting with only set up data
        tearDown();
    }
}