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
public class OshiDados {
    public static void main(String[] args) {
        DadosCPU dCpu = new DadosCPU();
        DadosRAM dRam = new DadosRAM();
        DadosHD dHd = new DadosHD();
        
        dCpu.insereDadosCPU();
        
        dRam.insereDadosRam();
        
        dHd.insereDadosHD();
        
    }
    //Pega informações gerais do hardware do PC
        
}
