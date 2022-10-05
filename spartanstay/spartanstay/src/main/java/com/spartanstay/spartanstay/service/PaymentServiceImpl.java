package com.spartanstay.spartanstay.service;

import com.spartanstay.spartanstay.model.Payment;
import com.spartanstay.spartanstay.controller.CustomerController;
import com.spartanstay.spartanstay.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

@Service
public class PaymentServiceImpl {
    static HashMap<Integer, Integer> substitutions = new HashMap<Integer, Integer>();

    @Autowired
    private PaymentRepository paymentRepo;

    Payment saveDetails(Payment payment)
    {
        String encryptNumber = encrypt(payment.getCardNumber());
        String encryptExpMon = encrypt(payment.getExpMonth());
        String encryptExpYear = encrypt(payment.getExpYear());
        String encryptSecCode =  encrypt(payment.getSecurityCode());
        return paymentRepo.saveDetails(CustomerController.currentUser.getId(), payment.getPaymentType(), encryptNumber, encryptExpMon, encryptExpYear, encryptSecCode);
    }

    Payment getDetails(String paymentType)
    {
        Payment data = paymentRepo.findDetails(CustomerController.currentUser.getId(), paymentType);
        data.setCardNumber(decrypt(data.getCardNumber()));
        data.setExpMonth(decrypt(data.getExpMonth()));
        data.setExpYear(decrypt(data.getExpYear()));
        data.setSecurityCode(decrypt(data.getSecurityCode()));
        return data;
    }

    public static String encrypt(String givenPassword)
    {
        setUpMap();
        givenPassword = givenPassword.replaceAll(" ", "");
        int[] val = new int[givenPassword.length()];
        for (int i = 0; i < givenPassword.length(); i++) {
            val[i] = Integer.valueOf(givenPassword.substring(i, i+1));
        }

        int[] newVal = new int[val.length];

        for(int i = 0; i < val.length; i++)
        {
            newVal[i] = substitutions.get(val[i]);
        }

        String newCode = Arrays.toString(newVal);
        newCode = newCode.replaceAll("]", "").replaceAll(",", "").replaceAll(" ", "");
        newCode = newCode.substring(1);

        return newCode;
    }

    public static String decrypt(String encryptedPassword) {
        setUpMap();
        int[] val = new int[encryptedPassword.length()];
        for (int i = 0; i < encryptedPassword.length(); i++) {
            val[i] = Integer.valueOf(encryptedPassword.substring(i, i+1));
        }

        int[] originalPassword = new int[encryptedPassword.length()];

        for (int j = 0; j < val.length; j++) {
            for (Map.Entry<Integer, Integer> entry : substitutions.entrySet()) {
                // if give value is equal to value from entry
                // print the corresponding key
                if (entry.getValue() == val[j]) {
                    originalPassword[j] = entry.getKey();
                    break;
                }
            }
        }
        String originalCode = Arrays.toString(originalPassword);
        originalCode = originalCode.replaceAll(",", "").replaceAll(" ", "");
        originalCode = originalCode.substring(1, originalCode.length()-1);

        //if its a card # then add back the spaces
        if(originalCode.length() > 4)
        {
            originalCode = originalCode.substring(0, 4) + " " + originalCode.substring(4, 8) + " " + originalCode.substring(8, 12) + " " + originalCode.substring(12);
        }

        return originalCode;
    }

    public static void setUpMap()
    {
        substitutions.clear();
        substitutions.put(0,4);
        substitutions.put(1,3);
        substitutions.put(2,7);
        substitutions.put(3,1);
        substitutions.put(4,9);
        substitutions.put(5,8);
        substitutions.put(6,0);
        substitutions.put(7,5);
        substitutions.put(8,2);
        substitutions.put(9,6);
    }
}
