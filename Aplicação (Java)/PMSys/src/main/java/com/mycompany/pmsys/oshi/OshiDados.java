/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.pmsys.oshi;
/**
 *
 * @author Ultim
 */
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
@Component
        
public class OshiDados {
    @Scheduled (cron= "0 0/1 * 1/1 * ? *")
    public static void main(String[] args) {
        
        DadosCPU dCpu = new DadosCPU();
        DadosRAM dRam = new DadosRAM();
        DadosHD dHd = new DadosHD();
        DadosProcessos dProcessos = new DadosProcessos();
        
        dCpu.insereDadosCPU();
        
        dRam.insereDadosRam();
        
        dHd.insereDadosHD();
        
        dProcessos.processosAtuais();
        
    }
    //Pega informações gerais do hardware do PC
        
}
