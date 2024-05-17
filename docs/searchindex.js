Search.setIndex({"docnames": ["examples", "forced_response", "index", "installation", "modal_analysis", "modeling", "modules", "notebooks/ICE_example", "notebooks/modal_analysis_and_forced_response", "opentorsion", "opentorsion.examples", "opentorsion.tests", "transient_response", "tutorials", "usage"], "filenames": ["examples.rst", "forced_response.rst", "index.rst", "installation.rst", "modal_analysis.rst", "modeling.rst", "modules.rst", "notebooks/ICE_example.ipynb", "notebooks/modal_analysis_and_forced_response.ipynb", "opentorsion.rst", "opentorsion.examples.rst", "opentorsion.tests.rst", "transient_response.rst", "tutorials.rst", "usage.rst"], "titles": ["Examples", "Tutorial - Steady-state forced response", "OpenTorsion: Open-Source Software for Torsional Vibration Analysis", "Installation", "Tutorial - Modal analysis and Campbell diagram", "Tutorial - Modelling", "opentorsion", "Steady-state torsional vibration in the crankshaft of an internal combustion engine", "Modal analysis and steady-state forced response calculation example", "API Reference", "Example modules", "opentorsion.tests package", "Tutorial - Transient response", "Tutorials", "Quickstart"], "terms": {"modal": [0, 2, 9, 13], "analysi": [0, 5, 7, 9, 10, 13, 14], "steadi": [0, 2, 9, 10, 13], "state": [0, 2, 9, 10, 12, 13], "forc": [0, 2, 7, 9, 10, 13], "respons": [0, 2, 7, 9, 10, 13], "calcul": [0, 1, 2, 4, 7, 9, 10, 11, 12, 14], "torsion": [0, 5, 9, 10, 13], "vibrat": [0, 5, 10, 13], "crankshaft": [0, 2, 10], "an": [0, 1, 2, 4, 5, 10, 12, 13, 14], "intern": [0, 2, 10], "combust": [0, 2, 10], "engin": [0, 2, 10], "exampl": [1, 2, 4, 5, 12, 14], "requir": [1, 3, 12], "assembli": [1, 4, 5, 6, 7, 8, 10, 12, 13, 14], "excit": [1, 6, 7, 8, 10, 12], "import": [1, 4, 5, 7, 8, 12, 14], "numpi": [1, 7, 8, 9, 12], "np": [1, 7, 8, 10, 12], "matplotlib": [1, 7, 12], "pyplot": [1, 7, 12], "plt": [1, 7, 12], "opentors": [1, 3, 4, 5, 7, 8, 9, 12, 13, 14], "ot": [1, 4, 5, 8, 12, 14], "creat": [1, 2, 3, 4, 5, 7, 8, 10, 12, 14], "4": [1, 4, 5, 7, 8, 9, 10, 12], "shaft": [1, 2, 4, 5, 6, 7, 8, 10, 12, 14], "element": [1, 2, 4, 5, 6, 7, 10, 12, 14], "us": [1, 3, 4, 5, 7, 9, 10, 12, 14], "stiff": [1, 4, 5, 7, 8, 9, 12, 14], "valu": [1, 4, 5, 9, 10, 12], "syntax": [1, 4, 5, 12], "node": [1, 4, 5, 7, 9, 10, 12], "1": [1, 4, 5, 7, 8, 9, 10, 12, 14], "2": [1, 4, 5, 7, 8, 9, 12, 14], "length": [1, 4, 5, 9, 12], "mm": [1, 4, 5, 12], "outer": [1, 4, 5, 12, 14], "diamet": [1, 4, 5, 9, 12], "nm": [1, 4, 5, 7, 8, 12], "rad": [1, 4, 5, 8, 9, 12], "shaft1": [1, 4, 5, 12], "0": [1, 4, 5, 7, 8, 9, 10, 12, 14], "l": [1, 4, 5, 9, 12], "none": [1, 4, 5, 7, 8, 9, 12, 14], "odl": [1, 4, 5, 9, 12], "k": [1, 4, 5, 6, 7, 8, 9, 12, 14], "25e": [1, 4, 5, 12], "6": [1, 4, 5, 7, 8, 12], "shaft2": [1, 4, 5, 12], "shaft3": [1, 4, 5, 12], "3": [1, 4, 5, 7, 8, 9, 12, 14], "shaft4": [1, 4, 5, 12], "5": [1, 4, 5, 7, 8, 9, 10, 12, 14], "disk": [1, 4, 5, 6, 7, 8, 10, 12, 14], "inertia": [1, 4, 5, 9, 12, 14], "kgm": [1, 4, 5, 8, 12], "disk1": [1, 4, 5, 12], "i": [1, 3, 4, 5, 7, 8, 9, 10, 12, 13, 14], "100": [1, 4, 5, 9, 12], "disk2": [1, 4, 5, 12], "10": [1, 4, 5, 7, 8, 10, 12, 14], "disk3": [1, 4, 5, 12], "50": [1, 4, 5, 12], "disk4": [1, 4, 5, 12], "disk5": [1, 4, 5, 12], "80": [1, 4, 5, 12], "ad": [1, 4, 5, 9, 12, 14], "list": [1, 4, 5, 8, 9, 12, 14], "correspond": [1, 4, 5, 7, 9, 10, 12, 14], "type": [1, 4, 5, 9, 12], "shaft_el": [1, 4, 5, 7, 9, 10, 12], "disk_el": [1, 4, 5, 7, 8, 9, 10, 12, 14], "harmon": [1, 4, 7, 8, 9, 10], "arrai": [1, 7, 8, 9, 10], "multipl": [1, 9], "rotat": [1, 4, 5, 7, 8, 9, 10, 12], "frequenc": [1, 2, 4, 7, 9, 10], "amplitud": [1, 8, 9], "200": 1, "defin": [1, 5, 9, 12], "matrix": [1, 7, 8, 9, 10], "speed": [1, 4, 7, 8, 9, 10, 12], "depend": [1, 7, 8, 10], "appli": 1, "row": [1, 7, 9, 10], "column": [1, 7, 9, 10], "zero": [1, 7, 8, 9, 12], "dof": [1, 7, 9, 12], "len": [1, 7, 12], "w": [1, 7, 10], "3600": [1, 4], "pi": [1, 7, 8], "60": [1, 7], "base": [1, 2, 5, 7, 8, 9, 10, 11], "t": [1, 6, 7, 9, 10, 12], "linspac": [1, 7, 8], "time": [1, 2, 9, 12, 13], "plot": [1, 4, 5, 6, 7, 8, 10, 12, 14], "omega": [1, 7, 8, 9], "q_re": 1, "w_re": 1, "ss_respons": [1, 6, 9], "angl": [1, 7, 10, 12], "differ": [1, 7, 12], "between": [1, 7, 10], "two": [1, 7, 8, 9, 10], "consecut": [1, 7], "q_differ": [1, 7], "initi": [1, 4, 5, 8, 10, 12, 14], "subplot": [1, 12], "fig": [1, 7, 10, 12], "ax": [1, 9, 12], "figsiz": [1, 12], "8": [1, 7, 8, 12], "ar": [1, 5, 7, 8, 9, 10, 12, 14], "torqu": [1, 7, 8, 9, 10, 12, 14], "from": [1, 3, 7, 9, 10, 12], "shaft_stiff": [1, 12], "loop": [1, 12], "over": [1, 9, 12], "each": [1, 4, 7, 8, 9, 10, 12, 14], "them": [1, 12], "n": [1, 9, 12], "rang": [1, 4, 7, 9, 12], "shaft_respons": 1, "sum_wav": [1, 7], "zeros_lik": [1, 7], "compon": [1, 7, 9, 10], "cumul": 1, "result": [1, 9, 12], "response_compon": 1, "enumer": 1, "zip": 1, "get": [1, 7, 8], "waveform": 1, "this_wav": [1, 7], "real": [1, 7], "exp": [1, 7], "0j": [1, 7], "sum": [1, 7, 8], "wave": 1, "individu": 1, "newton": [1, 12], "meter": [1, 12], "c": [1, 6, 7, 8, 9, 10, 12], "grai": 1, "signal": [1, 7, 10, 12], "red": [1, 7, 12], "set_titl": [1, 12], "f": [1, 12], "set_xlabel": [1, 12], "": [1, 4, 5, 7, 9, 10, 12], "set_ylabel": [1, 12], "tight_layout": [1, 12], "show": [1, 12], "includ": [2, 5, 8, 9, 13, 14], "tool": [2, 4, 5, 8, 14], "line": [2, 5, 7, 9, 10, 14], "finit": [2, 5, 7, 10, 14], "model": [2, 6, 7, 8, 10, 12, 13, 14], "domain": [2, 9], "support": [2, 5, 9], "featur": 2, "creation": 2, "dimens": [2, 5], "datasheet": 2, "specif": [2, 7, 9, 10], "natur": 2, "eigenmod": [2, 4, 6, 8, 9, 11, 14], "step": [2, 9, 12, 13], "simul": [2, 12, 13], "instal": [2, 14], "quickstart": 2, "api": [2, 6], "refer": [2, 5, 6, 10, 14], "tutori": [2, 10, 14], "campbel": [2, 9, 13, 14], "diagram": [2, 9, 13, 14], "transient": [2, 9, 13], "python": [3, 5], "you": [3, 14], "can": [3, 5, 9, 10, 14], "offici": 3, "websit": 3, "http": [3, 7, 8, 10], "www": 3, "org": [3, 7, 8, 10], "packag": 3, "pip": 3, "pypi": 3, "project": 3, "altern": 3, "git": 3, "repositori": 3, "clone": 3, "github": 3, "com": 3, "aalto": 3, "arotor": 3, "thi": [3, 9], "folder": 3, "contain": [3, 4, 7, 8, 9, 10, 14], "sourc": 3, "code": 3, "plot_tool": [4, 5, 8, 14], "system": [4, 5, 7, 8, 9, 10], "eigenfrequ": [4, 8, 9, 14], "omegas_undamp": [4, 8, 14], "omegas_damp": [4, 8, 14], "damping_ratio": [4, 8, 14], "modal_analysi": [4, 6, 8, 9, 14], "print": [4, 8, 14], "The": [4, 5, 7, 8, 9, 10, 14], "twice": [4, 8, 14], "e": [4, 6, 7, 8, 9, 14], "1st": [4, 8, 14], "2nd": [4, 8, 14], "3rd": [4, 8, 14], "round": [4, 8, 14], "take": [4, 9, 10], "paramet": [4, 5, 7, 8, 10], "number": [4, 7, 8, 9, 10, 14], "plot_eigenmod": [4, 6, 8, 9, 14], "mode": [4, 8, 9, 14], "rpm": [4, 7, 8, 10], "oper": 4, "plot_campbel": [4, 6, 8, 9, 14], "frequency_range_rpm": [4, 8, 9, 14], "5000": [4, 8], "num_mod": [4, 8, 9, 14], "operating_speeds_rpm": [4, 9], "librari": 5, "run": [5, 10, 11, 13], "analys": [5, 13], "method": [5, 9, 11], "lump": [5, 8, 10], "damp": [5, 7, 8, 9, 10], "gear": [5, 6, 7, 10], "respect": 5, "class": [5, 7, 9, 10, 11], "combin": 5, "which": [5, 7, 10], "repres": 5, "below": 5, "hollow": 5, "materi": 5, "inner": [5, 14], "shear": 5, "modulu": 5, "pa": [5, 7, 10], "densiti": 5, "kg": [5, 7], "m": [5, 6, 7, 8, 9], "shaft5": 5, "400": 5, "idl": [5, 9], "40": 5, "g": [5, 8, 9, 14], "79e9": 5, "rho": [5, 9], "7850": 5, "disk6": 5, "consist": [5, 9, 10], "parent": [5, 9], "one": [5, 9], "more": [5, 14], "child": [5, 9], "radiu": [5, 7, 9], "gear1": 5, "r": [5, 7, 9], "gear2": 5, "150": 5, "gear_el": [5, 7, 9, 10], "visual": 5, "plot_assembli": [5, 6, 8, 9, 14], "friswel": 5, "mi": 5, "penni": 5, "jet": 5, "garvei": 5, "sd": 5, "lee": 5, "aw": 5, "dynam": [5, 7, 8, 14], "machin": 5, "cambridg": 5, "univers": 5, "press": 5, "2010": [5, 8, 10, 14], "c_modal": [6, 8, 9], "assemble_c": [6, 9], "assemble_k": [6, 9], "assemble_m": [6, 9], "check_dof": [6, 7, 9], "continuous_2_discret": [6, 9, 12], "nongeark": [6, 9], "state_matrix": [6, 8, 9], "state_spac": [6, 9, 12], "undamped_modal_analysi": [6, 9], "vibratory_torqu": [6, 7, 8, 9, 10], "systemexcit": [6, 9], "add_harmon": [6, 9], "add_sweep": [6, 9], "excitation_amplitud": [6, 9], "excitation_frequ": [6, 9], "time_domain_excit": [6, 9], "plot_on_ax": [6, 9], "torque_response_plot": [6, 7, 8, 9], "produc": [7, 10], "cylind": [7, 10], "pressur": [7, 10], "ignit": [7, 10], "scale": [7, 10], "accord": [7, 10], "articl": [7, 8, 10], "experiment": 7, "valid": 7, "origin": [7, 10], "scipi": [7, 12], "def": [7, 8], "pressure_curv": [7, 10], "load": [7, 10], "digit": [7, 10], "curv": [7, 10], "csv": [7, 10], "pass": [7, 10], "interpol": [7, 10], "genfromtxt": 7, "ice_example_data": 7, "pressure_data": 7, "delimit": 7, "return": [7, 8, 9, 10], "interp1d": 7, "peak_pressur": [7, 10], "peak": [7, 10], "peak_data": 7, "scaled_cylinder_pressur": [7, 10], "num_point": [7, 10], "variat": [7, 10], "argument": 7, "float": [7, 9, 10], "int": [7, 9, 12], "point": [7, 10], "x": [7, 9, 10], "axi": [7, 10, 12], "ndarrai": [7, 9, 10], "given": [7, 8, 9, 10], "scaled_curv": [7, 10], "720": 7, "base_curv": 7, "base_curve_sampl": 7, "15": [7, 8], "1e6": 7, "calculate_cylinder_torqu": [7, 10], "speed_rpm": [7, 10], "500": [7, 10, 12], "singl": [7, 10], "tangenti": [7, 10], "caus": [7, 10], "oscil": [7, 10], "inerti": [7, 10], "spin": [7, 10], "current": [7, 10], "option": [7, 9, 10], "m_t": [7, 10], "alpha": [7, 9, 10], "alpha_to_beta": 7, "l_rod": 7, "arcsin": 7, "sin": 7, "207": 7, "d_piston": 7, "105": 7, "137": 7, "piston": 7, "stroke": 7, "m_a": 7, "521": 7, "alpha_deg": 7, "p_curv": 7, "180": 7, "f_g": 7, "25": [7, 8], "beta": 7, "f_tg": 7, "co": 7, "ga": 7, "lambda_rl": 7, "f_ia": 7, "9": [7, 8, 14], "128": 7, "f_ta": 7, "f_t": 7, "total": [7, 8], "calculate_dft_compon": [7, 10], "num_harmon": [7, 10], "dft": [7, 10], "stedi": [7, 10], "consid": [7, 9, 10], "complex": [7, 9, 10], "first": [7, 8, 10], "fourier": [7, 10], "transform": [7, 9, 10], "fft": 7, "rfft": 7, "rfftfreq": 7, "7": 7, "crankshaft_assembli": [7, 10], "A": [7, 8, 9, 10, 12], "present": [7, 10], "doi": [7, 8, 10, 14], "1243": [7, 10], "14644193jmbd126": [7, 10], "instanc": [7, 9, 10], "j2": [7, 8, 14], "0170": 7, "j3": [7, 8, 14], "0090": 7, "j4": 7, "0467": 7, "j5": 7, "0327": 7, "j6": 7, "j7": 7, "j8": 7, "j9": 7, "0487": 7, "j10": 7, "0750": 7, "k2": [7, 8, 14], "106e6": 7, "k3": 7, "631e6": 7, "k4": 7, "253e6": 7, "k5": 7, "k6": 7, "678e6": 7, "k7": 7, "k8": 7, "k9": 7, "976e6": 7, "c_a": 7, "absolut": 7, "append": [7, 8, 14], "flywheel": [7, 10], "relative_damping_c": [7, 10], "d": [7, 10, 12], "updat": [7, 9, 10], "when": [7, 9, 10], "rel": [7, 10], "whose": [7, 10], "loss": [7, 10], "factor": [7, 9, 10], "properti": [7, 10], "angular": [7, 9, 10], "assembl": [7, 9, 10], "new": [7, 10], "coeffici": [7, 9, 10], "c_r": 7, "els": [7, 8], "nl": [7, 9], "nr": [7, 9], "ix_": 7, "build": [7, 9], "mass": [7, 8, 9, 10], "dot": 7, "calculate_respons": [7, 10], "sum_respons": [7, 10], "maximum": [7, 9, 10], "vibratori": [7, 9, 10], "cylinder_torqu": 7, "dft_paramet": 7, "q": 7, "dtype": [7, 8], "complex128": [7, 8], "035": 7, "vector": 7, "offset": 7, "phase_shift": 7, "recept": 7, "linalg": 7, "inv": 7, "shaft_list": 7, "shaft_k": 7, "multipli": [7, 9], "connect": [7, 8, 10], "q_respons": 7, "shaft_i": 7, "ab": [7, 8, 9], "plot_result": [7, 10], "want": [7, 10], "all": [7, 9, 10], "shaft_8": [7, 10], "6th": [7, 10], "shaft_1": [7, 10], "pullei": [7, 10], "train": [7, 8, 10, 14], "label": 7, "xlabel": [7, 12], "ylabel": [7, 12], "titl": [7, 12], "31": [7, 12], "figur": 7, "32": 7, "11": 7, "arang": [7, 12], "1000": [7, 9], "2575": 7, "everi": 7, "same": [7, 9], "true": [7, 8, 9], "mend": 7, "AS": 7, "meirel": 7, "p": [7, 8], "zampieri": 7, "de": 7, "proceed": 7, "institut": 7, "mechan": [7, 8, 9, 10], "part": [7, 9], "journal": 7, "multi": [7, 9], "bodi": 7, "2008": 7, "222": 7, "155": 7, "178": 7, "wind": [8, 14], "turbin": [8, 14], "drive": [8, 14], "direct": [8, 14], "driven": [8, 14], "perman": [8, 14], "magnet": [8, 14], "gener": [8, 10, 14], "generator_torqu": [8, 10], "function": [8, 9, 10], "rotor": [8, 10, 14], "rated_t": 8, "9e6": 8, "elif": 8, "125": 8, "b": [8, 9, 12], "22": [8, 12], "get_windmill_excit": [8, 10], "cog": [8, 10], "rippl": [8, 10], "tabl": [8, 10], "iii": [8, 10], "f_": 8, "v": [8, 14], "12": 8, "14": 8, "16": 8, "0018": 8, "0179": 8, "0024": 8, "0034": 8, "0117": 8, "0011": 8, "0176": 8, "forced_respons": 8, "windmil": [8, 14], "three": [8, 10], "input": [8, 9, 10, 14], "final": [8, 10], "k1": [8, 14], "67e8": [8, 14], "496e9": [8, 14], "j1": [8, 14], "1e7": [8, 14], "5770": [8, 14], "97030": [8, 14], "matric": [8, 9], "xi": [8, 9], "02": [8, 9], "call": [8, 10, 14], "300": [8, 14], "vt_element1": 8, "vt_element2": 8, "here": 8, "shape": [8, 9, 12, 14], "act": 8, "side": 8, "t_vib": 8, "k_shaft": [8, 9], "t_e": 8, "show_plot": [8, 9], "58": [8, 14], "34": 8, "1034": 8, "115": 8, "j": [8, 14], "sopanen": [8, 14], "ruuskanen": [8, 14], "nerg": [8, 14], "pyrhonen": [8, 14], "ieee": [8, 14], "transact": [8, 14], "industri": [8, 14], "electron": [8, 14], "vol": [8, 14], "pp": [8, 14], "3859": [8, 14], "3867": [8, 14], "sept": [8, 14], "2011": [8, 14], "1109": [8, 10, 14], "tie": [8, 10, 14], "2087301": [8, 10, 14], "object": 9, "degre": 9, "freedom": 9, "attribut": 9, "full": 9, "obtain": 9, "debug": 9, "reason": 9, "default": 9, "constraint": 9, "determin": 9, "c2d": 9, "comput": 9, "discret": [9, 12], "a_c": 9, "b_c": 9, "sampl": 9, "bd": [9, 12], "continu": 9, "solv": 9, "left": 9, "right": 9, "start": 9, "eigenvalu": 9, "undamp": 9, "ratio": 9, "excitations": 9, "displac": 9, "space": [9, 12], "second": 9, "order": 9, "a_si": 9, "b_sy": 9, "eigenvector": 9, "80000000000": 9, "200000000000": 9, "8000": 9, "constant": 9, "circular": 9, "cross": 9, "section": 9, "other": 9, "moment": 9, "give": 9, "either": 9, "overrid": 9, "geometri": 9, "One": 9, "have": [9, 14], "children": 9, "onli": 9, "teeth": 9, "count": 9, "long": 9, "assum": 9, "rigid": 9, "fals": 9, "u": 9, "add": 9, "excitaiton": 9, "should": 9, "extens": 9, "check": 9, "size": 9, "where": 9, "sweep": 9, "uniform": 9, "interv": 9, "lowest": 9, "highest": 9, "evenli": 9, "specifi": 9, "data": 9, "must": 9, "equal": 9, "spring": 9, "frequency_rang": 9, "hz": 9, "schemat": 9, "trajectori": 9, "dash": 9, "so": 9, "ha": 9, "phase": 9, "eigenod": 9, "local": 10, "For": 10, "instruct": 10, "how": 10, "pleas": 10, "back_to_back_testbench": 10, "powertrain": [10, 14], "windmill_assembli": 10, "fem": 10, "py": 10, "document": 10, "methodnam": 11, "runtest": 11, "testcas": 11, "unittest": 11, "assertalmostequ": 11, "assertdictequ": 11, "assertequ": 11, "assertnotalmostequ": 11, "assertnotequ": 11, "assertnotregexpmatch": 11, "assertraisesregexp": 11, "assertregexpmatch": 11, "assert_": 11, "counttestcas": 11, "defaulttestresult": 11, "failif": 11, "failifalmostequ": 11, "failifequ": 11, "failunless": 11, "failunlessalmostequ": 11, "failunlessequ": 11, "failunlessrais": 11, "id": 11, "test_frequency_domain_excitation_matrix_shap": 11, "test_friswell_09_09": 11, "test_friswell_ex971": 11, "test_friswell_pagex": 11, "test_mass_matrix": 11, "test_modal_damping_matrix": 11, "test_shaft": 11, "test_stiffness_matrix": 11, "test_stiffness_matrix_2": 11, "test_friswell_09_06": 11, "dlsim": 12, "impuls": 12, "dt": 12, "002": 12, "ramp": 12, "2000": 12, "30": 12, "39": 12, "black": 12, "lti": 12, "ey": 12, "sy": 12, "tout": 12, "yout": 12, "xout": 12, "nodal": 12, "split": 12, "avail": 13, "reqir": 13, "see": 14, "yet": 14, "modul": 14}, "objects": {"opentorsion": [[9, 0, 0, "-", "assembly"], [9, 0, 0, "-", "excitation"], [9, 0, 0, "-", "plots"], [11, 0, 0, "-", "tests"]], "opentorsion.assembly": [[9, 1, 1, "", "Assembly"]], "opentorsion.assembly.Assembly": [[9, 2, 1, "", "C_modal"], [9, 2, 1, "", "E"], [9, 2, 1, "", "T"], [9, 2, 1, "", "assemble_C"], [9, 2, 1, "", "assemble_K"], [9, 2, 1, "", "assemble_M"], [9, 2, 1, "", "check_dof"], [9, 2, 1, "", "continuous_2_discrete"], [9, 2, 1, "", "eigenmodes"], [9, 2, 1, "", "modal_analysis"], [9, 2, 1, "", "nongearK"], [9, 2, 1, "", "ss_response"], [9, 2, 1, "", "state_matrix"], [9, 2, 1, "", "state_space"], [9, 2, 1, "", "undamped_modal_analysis"], [9, 2, 1, "", "vibratory_torque"]], "opentorsion.elements": [[9, 0, 0, "-", "disk_element"], [9, 0, 0, "-", "gear_element"], [9, 0, 0, "-", "shaft_element"]], "opentorsion.elements.disk_element": [[9, 1, 1, "", "Disk"]], "opentorsion.elements.disk_element.Disk": [[9, 2, 1, "", "C"], [9, 2, 1, "", "K"], [9, 2, 1, "", "M"]], "opentorsion.elements.gear_element": [[9, 1, 1, "", "Gear"]], "opentorsion.elements.gear_element.Gear": [[9, 2, 1, "", "C"], [9, 2, 1, "", "K"], [9, 2, 1, "", "M"]], "opentorsion.elements.shaft_element": [[9, 1, 1, "", "Shaft"]], "opentorsion.elements.shaft_element.Shaft": [[9, 2, 1, "", "C"], [9, 2, 1, "", "K"], [9, 2, 1, "", "M"]], "opentorsion.examples.ICE_example": [[10, 0, 0, "-", "ICE_example"]], "opentorsion.examples.ICE_example.ICE_example": [[10, 3, 1, "", "calculate_cylinder_torque"], [10, 3, 1, "", "calculate_dft_components"], [10, 3, 1, "", "calculate_response"], [10, 3, 1, "", "crankshaft_assembly"], [10, 3, 1, "", "peak_pressures"], [10, 3, 1, "", "plot_results"], [10, 3, 1, "", "pressure_curve"], [10, 3, 1, "", "relative_damping_C"], [10, 3, 1, "", "scaled_cylinder_pressure"]], "opentorsion.examples": [[10, 0, 0, "-", "forced_response"], [10, 0, 0, "-", "roll"], [10, 0, 0, "-", "windmill"]], "opentorsion.examples.forced_response": [[10, 3, 1, "", "forced_response"], [10, 3, 1, "", "generator_torque"], [10, 3, 1, "", "get_windmill_excitation"]], "opentorsion.examples.roll": [[10, 3, 1, "", "back_to_back_testbench"]], "opentorsion.examples.windmill": [[10, 3, 1, "", "windmill_assembly"]], "opentorsion.excitation": [[9, 1, 1, "", "SystemExcitation"]], "opentorsion.excitation.SystemExcitation": [[9, 2, 1, "", "add_harmonic"], [9, 2, 1, "", "add_sweep"], [9, 2, 1, "", "excitation_amplitudes"], [9, 2, 1, "", "excitation_frequencies"], [9, 2, 1, "", "time_domain_excitation"]], "opentorsion.plots": [[9, 1, 1, "", "Plots"]], "opentorsion.plots.Plots": [[9, 2, 1, "", "plot_assembly"], [9, 2, 1, "", "plot_campbell"], [9, 2, 1, "", "plot_eigenmodes"], [9, 2, 1, "", "plot_on_ax"], [9, 2, 1, "", "torque_response_plot"]], "opentorsion.tests": [[11, 0, 0, "-", "tests"]], "opentorsion.tests.tests": [[11, 1, 1, "", "Test"]], "opentorsion.tests.tests.Test": [[11, 2, 1, "", "test_frequency_domain_excitation_matrix_shape"], [11, 2, 1, "", "test_friswell_09_06"], [11, 2, 1, "", "test_friswell_09_09"], [11, 2, 1, "", "test_friswell_ex971"], [11, 2, 1, "", "test_friswell_pagex"], [11, 2, 1, "", "test_mass_matrix"], [11, 2, 1, "", "test_modal_damping_matrix"], [11, 2, 1, "", "test_shaft"], [11, 2, 1, "", "test_stiffness_matrix"], [11, 2, 1, "", "test_stiffness_matrix_2"]]}, "objtypes": {"0": "py:module", "1": "py:class", "2": "py:method", "3": "py:function"}, "objnames": {"0": ["py", "module", "Python module"], "1": ["py", "class", "Python class"], "2": ["py", "method", "Python method"], "3": ["py", "function", "Python function"]}, "titleterms": {"exampl": [0, 8, 10], "tutori": [1, 4, 5, 12, 13], "steadi": [1, 7, 8], "state": [1, 7, 8], "forc": [1, 8], "respons": [1, 8, 12], "opentors": [2, 6, 10, 11], "open": 2, "sourc": 2, "softwar": 2, "torsion": [2, 7], "vibrat": [2, 7], "analysi": [2, 4, 8], "get": 2, "start": 2, "user": 2, "guid": 2, "instal": 3, "modal": [4, 8], "campbel": 4, "diagram": 4, "model": [5, 9], "crankshaft": 7, "an": 7, "intern": 7, "combust": 7, "engin": 7, "calcul": 8, "api": 9, "refer": 9, "assembli": 9, "paramet": 9, "shaft": 9, "element": 9, "disk": 9, "gear": 9, "excit": 9, "plot": 9, "modul": [10, 11], "forced_respons": 10, "roll": 10, "windmil": 10, "ice_exampl": 10, "test": 11, "packag": 11, "submodul": 11, "content": 11, "transient": 12, "quickstart": 14}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "nbsphinx": 4, "sphinx": 58}, "alltitles": {"Tutorial - Steady-state forced response": [[1, "tutorial-steady-state-forced-response"]], "OpenTorsion: Open-Source Software for Torsional Vibration Analysis": [[2, "opentorsion-open-source-software-for-torsional-vibration-analysis"]], "Getting Started:": [[2, null]], "User Guide:": [[2, null]], "Installation": [[3, "installation"]], "Tutorial - Modal analysis and Campbell diagram": [[4, "tutorial-modal-analysis-and-campbell-diagram"]], "Tutorial - Modelling": [[5, "tutorial-modelling"]], "opentorsion": [[6, "opentorsion"]], "API Reference": [[9, "api-reference"]], "Assembly": [[9, "module-opentorsion.assembly"]], "Parameters": [[9, "parameters"]], "Shaft element": [[9, "module-opentorsion.elements.shaft_element"]], "Disk element": [[9, "module-opentorsion.elements.disk_element"]], "Gear element": [[9, "module-opentorsion.elements.gear_element"]], "Excitation models": [[9, "module-opentorsion.excitation"]], "Plots": [[9, "module-opentorsion.plots"]], "Example modules": [[10, "example-modules"]], "opentorsion.examples.forced_response": [[10, "module-opentorsion.examples.forced_response"]], "opentorsion.examples.roll": [[10, "module-opentorsion.examples.roll"]], "opentorsion.examples.windmill": [[10, "module-opentorsion.examples.windmill"]], "opentorsion.examples.ICE_example": [[10, "module-opentorsion.examples.ICE_example.ICE_example"]], "opentorsion.tests package": [[11, "opentorsion-tests-package"]], "Submodules": [[11, "submodules"]], "opentorsion.tests.tests module": [[11, "module-opentorsion.tests.tests"]], "Module contents": [[11, "module-opentorsion.tests"]], "Tutorial - Transient response": [[12, "tutorial-transient-response"]], "Tutorials": [[13, "tutorials"]], "Quickstart": [[14, "quickstart"]], "Modal analysis and steady-state forced response calculation example": [[8, "Modal-analysis-and-steady-state-forced-response-calculation-example"]], "Steady-state torsional vibration in the crankshaft of an internal combustion engine": [[7, "Steady-state-torsional-vibration-in-the-crankshaft-of-an-internal-combustion-engine"]], "Examples": [[0, "examples"]]}, "indexentries": {"assembly (class in opentorsion.assembly)": [[9, "opentorsion.assembly.Assembly"]], "c() (opentorsion.elements.disk_element.disk method)": [[9, "opentorsion.elements.disk_element.Disk.C"]], "c() (opentorsion.elements.gear_element.gear method)": [[9, "opentorsion.elements.gear_element.Gear.C"]], "c() (opentorsion.elements.shaft_element.shaft method)": [[9, "opentorsion.elements.shaft_element.Shaft.C"]], "c_modal() (opentorsion.assembly.assembly method)": [[9, "opentorsion.assembly.Assembly.C_modal"]], "disk (class in opentorsion.elements.disk_element)": [[9, "opentorsion.elements.disk_element.Disk"]], "e() (opentorsion.assembly.assembly method)": [[9, "opentorsion.assembly.Assembly.E"]], "gear (class in opentorsion.elements.gear_element)": [[9, "opentorsion.elements.gear_element.Gear"]], "k() (opentorsion.elements.disk_element.disk method)": [[9, "opentorsion.elements.disk_element.Disk.K"]], "k() (opentorsion.elements.gear_element.gear method)": [[9, "opentorsion.elements.gear_element.Gear.K"]], "k() (opentorsion.elements.shaft_element.shaft method)": [[9, "opentorsion.elements.shaft_element.Shaft.K"]], "m() (opentorsion.elements.disk_element.disk method)": [[9, "opentorsion.elements.disk_element.Disk.M"]], "m() (opentorsion.elements.gear_element.gear method)": [[9, "opentorsion.elements.gear_element.Gear.M"]], "m() (opentorsion.elements.shaft_element.shaft method)": [[9, "opentorsion.elements.shaft_element.Shaft.M"]], "plots (class in opentorsion.plots)": [[9, "opentorsion.plots.Plots"]], "shaft (class in opentorsion.elements.shaft_element)": [[9, "opentorsion.elements.shaft_element.Shaft"]], "systemexcitation (class in opentorsion.excitation)": [[9, "opentorsion.excitation.SystemExcitation"]], "t() (opentorsion.assembly.assembly method)": [[9, "opentorsion.assembly.Assembly.T"]], "add_harmonic() (opentorsion.excitation.systemexcitation method)": [[9, "opentorsion.excitation.SystemExcitation.add_harmonic"]], "add_sweep() (opentorsion.excitation.systemexcitation method)": [[9, "opentorsion.excitation.SystemExcitation.add_sweep"]], "assemble_c() (opentorsion.assembly.assembly method)": [[9, "opentorsion.assembly.Assembly.assemble_C"]], "assemble_k() (opentorsion.assembly.assembly method)": [[9, "opentorsion.assembly.Assembly.assemble_K"]], "assemble_m() (opentorsion.assembly.assembly method)": [[9, "opentorsion.assembly.Assembly.assemble_M"]], "check_dof() (opentorsion.assembly.assembly method)": [[9, "opentorsion.assembly.Assembly.check_dof"]], "continuous_2_discrete() (opentorsion.assembly.assembly method)": [[9, "opentorsion.assembly.Assembly.continuous_2_discrete"]], "eigenmodes() (opentorsion.assembly.assembly method)": [[9, "opentorsion.assembly.Assembly.eigenmodes"]], "excitation_amplitudes() (opentorsion.excitation.systemexcitation method)": [[9, "opentorsion.excitation.SystemExcitation.excitation_amplitudes"]], "excitation_frequencies() (opentorsion.excitation.systemexcitation method)": [[9, "opentorsion.excitation.SystemExcitation.excitation_frequencies"]], "modal_analysis() (opentorsion.assembly.assembly method)": [[9, "opentorsion.assembly.Assembly.modal_analysis"]], "module": [[9, "module-opentorsion.assembly"], [9, "module-opentorsion.elements.disk_element"], [9, "module-opentorsion.elements.gear_element"], [9, "module-opentorsion.elements.shaft_element"], [9, "module-opentorsion.excitation"], [9, "module-opentorsion.plots"], [10, "module-opentorsion.examples.ICE_example.ICE_example"], [10, "module-opentorsion.examples.forced_response"], [10, "module-opentorsion.examples.roll"], [10, "module-opentorsion.examples.windmill"], [11, "module-opentorsion.tests"], [11, "module-opentorsion.tests.tests"]], "nongeark() (opentorsion.assembly.assembly method)": [[9, "opentorsion.assembly.Assembly.nongearK"]], "opentorsion.assembly": [[9, "module-opentorsion.assembly"]], "opentorsion.elements.disk_element": [[9, "module-opentorsion.elements.disk_element"]], "opentorsion.elements.gear_element": [[9, "module-opentorsion.elements.gear_element"]], "opentorsion.elements.shaft_element": [[9, "module-opentorsion.elements.shaft_element"]], "opentorsion.excitation": [[9, "module-opentorsion.excitation"]], "opentorsion.plots": [[9, "module-opentorsion.plots"]], "plot_assembly() (opentorsion.plots.plots method)": [[9, "opentorsion.plots.Plots.plot_assembly"]], "plot_campbell() (opentorsion.plots.plots method)": [[9, "opentorsion.plots.Plots.plot_campbell"]], "plot_eigenmodes() (opentorsion.plots.plots method)": [[9, "opentorsion.plots.Plots.plot_eigenmodes"]], "plot_on_ax() (opentorsion.plots.plots method)": [[9, "opentorsion.plots.Plots.plot_on_ax"]], "ss_response() (opentorsion.assembly.assembly method)": [[9, "opentorsion.assembly.Assembly.ss_response"]], "state_matrix() (opentorsion.assembly.assembly method)": [[9, "opentorsion.assembly.Assembly.state_matrix"]], "state_space() (opentorsion.assembly.assembly method)": [[9, "opentorsion.assembly.Assembly.state_space"]], "time_domain_excitation() (opentorsion.excitation.systemexcitation method)": [[9, "opentorsion.excitation.SystemExcitation.time_domain_excitation"]], "torque_response_plot() (opentorsion.plots.plots method)": [[9, "opentorsion.plots.Plots.torque_response_plot"]], "undamped_modal_analysis() (opentorsion.assembly.assembly method)": [[9, "opentorsion.assembly.Assembly.undamped_modal_analysis"]], "vibratory_torque() (opentorsion.assembly.assembly method)": [[9, "opentorsion.assembly.Assembly.vibratory_torque"]], "back_to_back_testbench() (in module opentorsion.examples.roll)": [[10, "opentorsion.examples.roll.back_to_back_testbench"]], "calculate_cylinder_torque() (in module opentorsion.examples.ice_example.ice_example)": [[10, "opentorsion.examples.ICE_example.ICE_example.calculate_cylinder_torque"]], "calculate_dft_components() (in module opentorsion.examples.ice_example.ice_example)": [[10, "opentorsion.examples.ICE_example.ICE_example.calculate_dft_components"]], "calculate_response() (in module opentorsion.examples.ice_example.ice_example)": [[10, "opentorsion.examples.ICE_example.ICE_example.calculate_response"]], "crankshaft_assembly() (in module opentorsion.examples.ice_example.ice_example)": [[10, "opentorsion.examples.ICE_example.ICE_example.crankshaft_assembly"]], "forced_response() (in module opentorsion.examples.forced_response)": [[10, "opentorsion.examples.forced_response.forced_response"]], "generator_torque() (in module opentorsion.examples.forced_response)": [[10, "opentorsion.examples.forced_response.generator_torque"]], "get_windmill_excitation() (in module opentorsion.examples.forced_response)": [[10, "opentorsion.examples.forced_response.get_windmill_excitation"]], "opentorsion.examples.ice_example.ice_example": [[10, "module-opentorsion.examples.ICE_example.ICE_example"]], "opentorsion.examples.forced_response": [[10, "module-opentorsion.examples.forced_response"]], "opentorsion.examples.roll": [[10, "module-opentorsion.examples.roll"]], "opentorsion.examples.windmill": [[10, "module-opentorsion.examples.windmill"]], "peak_pressures() (in module opentorsion.examples.ice_example.ice_example)": [[10, "opentorsion.examples.ICE_example.ICE_example.peak_pressures"]], "plot_results() (in module opentorsion.examples.ice_example.ice_example)": [[10, "opentorsion.examples.ICE_example.ICE_example.plot_results"]], "pressure_curve() (in module opentorsion.examples.ice_example.ice_example)": [[10, "opentorsion.examples.ICE_example.ICE_example.pressure_curve"]], "relative_damping_c() (in module opentorsion.examples.ice_example.ice_example)": [[10, "opentorsion.examples.ICE_example.ICE_example.relative_damping_C"]], "scaled_cylinder_pressure() (in module opentorsion.examples.ice_example.ice_example)": [[10, "opentorsion.examples.ICE_example.ICE_example.scaled_cylinder_pressure"]], "windmill_assembly() (in module opentorsion.examples.windmill)": [[10, "opentorsion.examples.windmill.windmill_assembly"]], "test (class in opentorsion.tests.tests)": [[11, "opentorsion.tests.tests.Test"]], "opentorsion.tests": [[11, "module-opentorsion.tests"]], "opentorsion.tests.tests": [[11, "module-opentorsion.tests.tests"]], "test_frequency_domain_excitation_matrix_shape() (opentorsion.tests.tests.test method)": [[11, "opentorsion.tests.tests.Test.test_frequency_domain_excitation_matrix_shape"]], "test_friswell_09_06() (opentorsion.tests.tests.test method)": [[11, "opentorsion.tests.tests.Test.test_friswell_09_06"]], "test_friswell_09_09() (opentorsion.tests.tests.test method)": [[11, "opentorsion.tests.tests.Test.test_friswell_09_09"]], "test_friswell_ex971() (opentorsion.tests.tests.test method)": [[11, "opentorsion.tests.tests.Test.test_friswell_ex971"]], "test_friswell_pagex() (opentorsion.tests.tests.test method)": [[11, "opentorsion.tests.tests.Test.test_friswell_pagex"]], "test_mass_matrix() (opentorsion.tests.tests.test method)": [[11, "opentorsion.tests.tests.Test.test_mass_matrix"]], "test_modal_damping_matrix() (opentorsion.tests.tests.test method)": [[11, "opentorsion.tests.tests.Test.test_modal_damping_matrix"]], "test_shaft() (opentorsion.tests.tests.test method)": [[11, "opentorsion.tests.tests.Test.test_shaft"]], "test_stiffness_matrix() (opentorsion.tests.tests.test method)": [[11, "opentorsion.tests.tests.Test.test_stiffness_matrix"]], "test_stiffness_matrix_2() (opentorsion.tests.tests.test method)": [[11, "opentorsion.tests.tests.Test.test_stiffness_matrix_2"]]}})