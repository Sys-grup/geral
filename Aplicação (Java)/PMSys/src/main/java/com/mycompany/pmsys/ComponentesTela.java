package com.mycompany.pmsys;

import javax.swing.JLabel;
import javax.swing.JProgressBar;
import javax.swing.JTable;


public class ComponentesTela {
    private Integer idMaquina;
    private JLabel lbNomeCpu;
    private JLabel lbCPU;
    private JProgressBar barCPU;
    private JLabel lbRAM;
    private JProgressBar barRAM;
    private JLabel lbHD;
    private JProgressBar barHD;
    private JTable tableProcessos;

    public ComponentesTela(Integer idMaquina, JLabel lbNomeCpu, JLabel lbCPU, JProgressBar barCPU, JLabel lbRAM, JProgressBar barRAM, JLabel lbHD, JProgressBar barHD, JTable tableProcessos) {
        this.idMaquina = idMaquina;
        this.lbNomeCpu = lbNomeCpu;
        this.lbCPU = lbCPU;
        this.barCPU = barCPU;
        this.lbRAM = lbRAM;
        this.barRAM = barRAM;
        this.lbHD = lbHD;
        this.barHD = barHD;
        this.tableProcessos = tableProcessos;
    }

    public Integer getIdMaquina() {
        return idMaquina;
    }

    public JLabel getLbNomeCpu() {
        return lbNomeCpu;
    }

    public JLabel getLbCPU() {
        return lbCPU;
    }

    public JProgressBar getBarCPU() {
        return barCPU;
    }

    public JLabel getLbRAM() {
        return lbRAM;
    }

    public JProgressBar getBarRAM() {
        return barRAM;
    }

    public JLabel getLbHD() {
        return lbHD;
    }

    public JProgressBar getBarHD() {
        return barHD;
    }

    public JTable getTableProcessos() {
        return tableProcessos;
    }
    
}
