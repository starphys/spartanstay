package com.spartanstay.spartanstay.service;

import com.spartanstay.spartanstay.model.Payment;
import com.spartanstay.spartanstay.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

@Service
public class PaymentServiceImpl implements PaymentService{
    static HashMap<Integer, Integer> substitutions = new HashMap<Integer, Integer>();

    @Autowired
    private PaymentRepository paymentRepo;

    @Override
    public Payment saveDetails(Payment payment)
    {
        //add this commented line once combined with login
        //payment.setUserId(currentUser.getID());
        payment.setCardNumber(encrypt(payment.getCardNumber()));
        payment.setExpMonth(encrypt(payment.getExpMonth()));
        payment.setExpYear(encrypt(payment.getExpYear()));
        payment.setSecurityCode(encrypt(payment.getSecurityCode()));
        return paymentRepo.save(payment);
    }

    @Override
    public List<Payment> getAllDetails()
    {
        return paymentRepo.findAll();
    }

    @Override
    public List<Payment> getDetails(int currentUserId)
    {
        List<Payment> data = paymentRepo.findByUserId(currentUserId);
        if(data.size()>=1)
        {
            for(int i = 0; i < data.size(); i++)
            {
                Payment d = data.get(i);
                d.setCardNumber(decrypt(d.getCardNumber()));
                d.setExpMonth(decrypt(d.getExpMonth()));
                d.setExpYear(decrypt(d.getExpYear()));
                d.setSecurityCode(decrypt(d.getSecurityCode()));
            }
        }
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
