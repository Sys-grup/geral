/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.pmsys.oshi;

import java.util.Arrays;
import java.util.List;
import oshi.SystemInfo;
import oshi.software.os.FileSystem;
import oshi.software.os.OSProcess;
import oshi.software.os.OperatingSystem;

/**
 *
 * @author Ultim
 */
public class DadosProcessos {
    
    //Variaveis ainda a serem criadas
    
    private SystemInfo si = new SystemInfo();
    private OperatingSystem os = si.getOperatingSystem();
    private FileSystem fs = os.getFileSystem();
    
    public void processosAtuais(){
        //Pegar os 10 primeiros dados de processos de acordo com a memoria
        List<OSProcess> procs = Arrays.asList(os.getProcesses(0, OperatingSystem.ProcessSort.MEMORY));
        
        for(int i = 0; i < procs.size(); i++){
            OSProcess p = procs.get(i);

            System.out.format("Process ID: %s, Process Name: %s, Tempo de Uso: %.2f\n", p.getParentProcessID(), p.getName(), (((1d * p.getUpTime())/1000)/60)/60);
            
        }
        
    }
    
}
